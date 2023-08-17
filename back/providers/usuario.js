const { Usuario } = require('../models');
const { CestaRecompensas } = require('../models');

const { sequelize } = require('../config/db-config');
const { Op } = require('sequelize');


const createUser = async (usuario) => {
  let transaction;
  try {
    transaction = await sequelize.transaction();

    const existingDeletedUser = await Usuario.findOne({
      where: {
        [Op.and]: [
          { deletedAt: { [Op.not]: null } }, // Buscar registros eliminados
          {
            [Op.or]: [
              { fullName: usuario.fullName },
              { email: usuario.email },
            ],
          },
        ],
      },
    });

    if (existingDeletedUser) {
      // Borrar el registro eliminado lógicamente
      await existingDeletedUser.destroy()
    }

    // Crear un registro en la tabla cestaRecompensas
    const newCestaRecompensas = await CestaRecompensas.create(
      { name: `Cesta de ${usuario.fullName}` },
      { transaction }
    );

    // Crear el nuevo registro de usuario con el id de la cestaRecompensas creada
    const newUser = await Usuario.create(
      {
        ...usuario,
        cestaRecompensasId: newCestaRecompensas.id,
      },
      { transaction }
    );

    await transaction.commit();

    // Devolver el nuevo registro de usuario
    return{
      id:newUser.id,
      fullName:newUser.fullName,
      email:newUser.email,
    }
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error('The user could not be created due to an error.', err);
    throw err;
  }
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de búsqueda
    const where = {}; // Excluir registros eliminados lógicamente
    const validOptions = ['id', 'fullName', 'telefono','email'];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const organizations = await Usuario.findAll({
      where,
      attributes: { exclude: ['deletedAt'] },
    });

    return organizations;
  } catch (error) {
    console.error(
      'The organization/s could not be retrieved due to an error.',
      error
    );
    throw error;
  }
};

const updateUserById = async (id, usuario) => {
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      throw new Error('The user does not exist.');
    }
    const updatedUser = await user.update(usuario);
    return updatedUser;
  } catch (error) {
    console.error('The user could not be updated due to an error.', error);
    throw error;
  }

}

const deleteUserById = async (id) => {
  try {
    const user = await Usuario.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await Usuario.update({ deletedAt: new Date() }, { where: { id } });


    //todo! --Eliminar físicamente el registro de la tabla CestaRecompensas--
    await CestaRecompensas.destroy({ where: { id: id } });


    

    return user;
  } catch (error) {
    console.error('Ocurrió un error al eliminar el usuario.', error);
    throw error;
  }
};





module.exports = {createUser, getUsersByCriteria, updateUserById, deleteUserById }