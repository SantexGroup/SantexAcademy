const { addRelation, updateRelation } = require('../helpers/relations.helper');
const { Profile, Skill, ProfileSkill } = require('../models');

async function getSkill(id) {
  const skill = await ProfileSkill.findOne({
    attributes: ['level'],
    where: {
      skills_id: id,
    },
    include: [{
      model: Skill,
      attributes: ['id', 'skill'],
    }],
  });
  if (skill) {
    return skill;
  }
  throw new Error('Skill no encontrada');
}

async function getAllSkill(id) {
  const skills = await Profile.findAll({
    attributes: [],
    where: {
      userId: id,
    },
    include: [
      {
        model: ProfileSkill,
        attributes: ['level'],
        include: [{
          model: Skill,
          attributes: ['skill'],
        }],
      }],
    distinct: true,
    group: ['skill'],
  });
  if (skills) {
    return skills;
  }
  throw new Error('No existe el skill');
}

async function addSkill(
  skill,
  level,
  profileId,
) {
  const createSkill = await Skill.create({
    skill,
  });

  await addRelation(ProfileSkill, createSkill.id, profileId, level);

  const newSkill = await getSkill(createSkill.id);

  return newSkill;
}

async function updateSkill(
  id,
  level,
  profileId,
) {
  const skill = await getSkill(id);

  const relationId = skill.ProfileSkill.id;

  await updateRelation(ProfileSkill, relationId, id, profileId, level);

  const upgradeSkill = await getSkill(id);

  return upgradeSkill;
}

async function deletedSkill(id) {
  const skill = await Skill.findByPk(id);

  if (skill && skill.deletedAt === null) {
    Skill.update({
      deletedAt: new Date(),
    }, {
      where: {
        id,
      },
    });
  } else {
    throw Error('El skill  no existe');
  }
}

module.exports = {
  getSkill,
  getAllSkill,
  addSkill,
  updateSkill,
  deletedSkill,
};
