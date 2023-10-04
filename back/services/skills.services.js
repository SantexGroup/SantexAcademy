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

async function getAllSkill(userId) {
  const userSkills = await Profile.findAll({
    attributes: [],
    where: {
      userId,
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
        }],
      }],
  });

  const skillList = [];
  const idSkill = [];

  userSkills.forEach((element) => {
    for (let i = 0; i < element.ProfileSkills.length; i += 1) {
      const skillItem = {
        id: element.ProfileSkills[i].Skill.id,
        skill: element.ProfileSkills[i].Skill.skill,
        level: element.ProfileSkills[i].level,
      };

      const { id } = element.ProfileSkills[i].Skill;

      if (!idSkill.includes(id)) {
        idSkill.push(id);
        skillList.push(skillItem);
      }
    }
  });
  return skillList;
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
