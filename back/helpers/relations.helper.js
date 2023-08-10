/*
  Funcion que crea la realacion entre Profile y una tabla externa
*/
/* La funcion requiere el modelo,
la Fk de tabla externa y el numero de Profile al que se quiere asociar */
async function addRelation(
  model,
  externalId,
  profileId,
) {
  // Se requiere una muestra del objeto para poder saber el nombre de sus keys
  const modelData = await model.findByPk(profileId);
  // Se deescompone el objeto obteniendo el nombre de la Fk
  const foreingKey = Object.keys(modelData.dataValues)[1];
  // Se guardara todo en el objeto data
  const data = {};
  // Se asigna el valor de profileId brindado al ProfilesId del modelo
  data.profilesId = profileId;
  // Se asigna el valor de externalId brindado al Fk del modelo
  data[foreingKey] = externalId;
  // Se crea la realacion en la base de datos
  const relation = await model.create(data);

  return relation;
}
/*
  Funcion que actualiza la realcion de Profile y otra tabla
  La funcion requiere del modelo, el id de la ralacion a modificar
  La Fk de la tabla externa
  El id del profile
*/
async function updateRelation(model, id, externalId, profileId) {
  // Requerimos una muestra para conocer nombre de la Fk
  const modelData = await model.findByPk(id);
  // Se deescompone el objeto obteniendo el nombre de la Fk
  const externalKey = Object.keys(modelData.dataValues)[1];
  // Se guardara todo en el objeto updateData
  const updateData = {};
  // Se asigna el valor de profileId brindado al ProfilesId del modelo
  updateData.profilesId = profileId;
  // Se asigna el valor de externalId brindado al Fk del modelo
  updateData[externalKey] = externalId;
  // Se procede con la actualizacion del modelo en la base de datos
  const relationUpdate = await model.update({
    ...updateData,
  }, {
    where: {
      id,
    },
  });
  return relationUpdate;
}

module.exports = {
  addRelation,
  updateRelation,
};
