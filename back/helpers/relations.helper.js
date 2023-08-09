async function addRelation(
  model,
  externalId,
  profileId,
) {
  const modelData = await model.findByPk(profileId);
  const foreingKey = Object.keys(modelData.dataValues)[0];
  const data = {};

  data.profilesId = profileId;
  data[foreingKey] = externalId;

  const relation = await model.create(data);

  return relation;
}

module.exports = {
  addRelation,
};
