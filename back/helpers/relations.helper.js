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
  // Se descompone el objeto obteniendo el nombre de la Fk
  const foreingKey = Object.keys(model.rawAttributes)[1];
  // Buscamos si la relacion ya existe
  const relationExist = await model.findOne({
    where: {
      profilesId: profileId,
      [foreingKey]: externalId,
    },
  });

  if (!relationExist) {
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
  throw new Error('La realacion ya existe');
}
/*
  Funcion que actualiza la realcion de Profile y otra tabla
  La funcion requiere del modelo, el id de la ralacion a modificar
  La Fk de la tabla externa
  El id del profile
*/
async function updateRelation(model, id, externalId, profileId) {
  // Se deescompone el objeto obteniendo el nombre de la Fk
  const foreingKey = Object.keys(model.rawAttributes)[1];
  // Buscamos si la relacion existe
  const relationExist = await model.findOne({
    where: {
      id,
    },
  });
  if (relationExist) {
    // Se guardara todo en el objeto updateData
    const updateData = {};
    // Se asigna el valor de profileId brindado al ProfilesId del modelo
    updateData.profilesId = profileId;
    // Se asigna el valor de externalId brindado al Fk del modelo
    updateData[foreingKey] = externalId;
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
  throw new Error('La relacion no existe');
}

module.exports = {
  addRelation,
  updateRelation,
};
