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
    const thisSkill = {
      id: skill.Skill.id,
      level: skill.level,
      skill: skill.Skill.skill,
    };

    return thisSkill;
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
        where: {
          deletedAt: null,
        },
        include: [{
          model: Skill,
          attributes: ['id', 'skill'],
        }],
      }],
    distinct: true,
    group: ['skill'],
  });
  if (skills) {
    const listSkills = skills.reduce(
      (allSkills, skill) => allSkills.concat(skill.ProfileSkills), [],
    );

    const allSkills = listSkills.map((skill) => ({
      id: skill.Skill.id,
      level: skill.level,
      skill: skill.Skill.skill,
    }));

    return allSkills;
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

  await ProfileSkill.create({
    profilesId: profileId,
    skillsId: createSkill.id,
    level,
  });

  const newSkill = await getSkill(createSkill.id);

  return newSkill;
}

async function updateSkill(
  id,
  level,
  skill,
) {
  await Skill.update({
    skill,
  }, {
    where: {
      id,
    },
  });

  await ProfileSkill.update({
    level,
  }, {
    where: {
      skillsId: id,
    },
  });

  const upgradeSkill = await getSkill(id);

  return upgradeSkill;
}

async function deletedSkill(id) {
  const skill = await Skill.findByPk(id);

  if (skill) {
    await ProfileSkill.update({
      deletedAt: new Date(),
    }, {
      where: {
        skillsId: id,
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
