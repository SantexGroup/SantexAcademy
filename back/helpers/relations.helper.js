/*
  Funcion que crea la realacion entre Profile y una tabla externa
*/
/* La funcion requiere el modelo,
la Fk de tabla externa y el numero de Profile al que se quiere asociar */
async function addRelation(
  model,
  externalId,
  profileId,
  level,
) {
  // Variable donde almacenamos el nombre de la FK
  let foreingKey = '';
  const keys = Object.keys(model.rawAttributes);
  // Si la tabla cuenta con la opcion de LVL
  if (level) {
    // Se descompone el objeto, y se consigue el nombre de la fk en la posicion 2 del objeto
    [,, foreingKey] = keys;
  } else {
    // caso contrario se descompone el objeto,
    // y se consigue el nombre de la fk en la posicion 1 del objeto
    [, foreingKey] = keys;
  }
  // Buscamos si la relacion ya existe
  const relationExist = await model.findOne({
    where: {
      profilesId: profileId,
      [foreingKey]: externalId,
    },
  });
  // Si la realacion no existe
  if (!relationExist) {
    // Se guardara todo en el objeto data
    const data = {};
    // Se asigna el valor de profileId brindado al ProfilesId del modelo
    data.profilesId = profileId;
    // Se asigna el valor de externalId brindado al Fk del modelo
    data[foreingKey] = externalId;
    // Se asigna el valor del level
    data.level = level;
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
async function updateRelation(
  model,
  id,
  externalId,
  profileId,
  level,
) {
  let foreingKey = '';
  const keys = Object.keys(model.rawAttributes);
  // Si la tabla cuenta con la opcion de LVL
  if (level) {
    // Se descompone el objeto, y se consigue el nombre de la fk en la posicion 2 del objeto
    [,, foreingKey] = keys;
  } else {
    // caso contrario se descompone el objeto,
    // y se consigue el nombre de la fk en la posicion 1 del objeto
    [, foreingKey] = keys;
  }
  console.log(foreingKey);
  // Buscamos si la relacion existe
  const relationExist = await model.findOne({
    where: {
      id,
    },
  });
  // Si la relacion existe
  if (relationExist) {
    // Se guardara todo en el objeto updateData
    const updateData = {};
    // Se asigna el valor de profileId brindado al ProfilesId del modelo
    updateData.profilesId = profileId;
    // Se asigna el valor de externalId brindado al Fk del modelo
    updateData[foreingKey] = externalId;
    // Se actualiza el valor del level
    updateData.level = level;
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
