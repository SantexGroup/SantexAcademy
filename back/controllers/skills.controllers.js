const SkillService = require('../services/skills.services');

async function skillGet(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    const skill = await SkillService.getSkill(id);
    res.status(200).send(skill);
  } catch (error) {
    next(error);
  }
}

async function skillGetAll(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    const skills = await SkillService.getAllSkill(id);
    res.status(200).send(skills);
  } catch (error) {
    next(error);
  }
}

async function skillAdd(
  req,
  res,
  next,
) {
  const {
    skill,
    level,
    profileId,
  } = req.body;

  try {
    const newSkill = await SkillService.addSkill(
      skill,
      level,
      profileId,
    );

    res.status(200).send(newSkill);
  } catch (error) {
    next(error);
  }
}

async function skillUpdate(
  req,
  res,
  next,
) {
  const { id } = req.params;
  const {
    level,
    profileId,
  } = req.body;
  try {
    const updateSkill = await SkillService.updateSkill(
      id,
      level,
      profileId,
    );
    res.status(201).send(updateSkill);
  } catch (error) {
    next(error);
  }
}

async function skillDelete(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    await SkillService.deletedSkill(id);
    res.status(200).send('Skill eliminado correctamente');
  } catch (error) {
    next(error);
  }
}

module.exports = {
  skillGet,
  skillGetAll,
  skillAdd,
  skillUpdate,
  skillDelete,
};
