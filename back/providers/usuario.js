const { Usuario } = require('../models');
const { CestaRecompensas } = require('../models');

const { sequelize } = require('../config/db-config');
const { Op } = require('sequelize');

const loginUser = async (email, password) => {
  try {
    const user = await Usuario.findOne({
      where: {
        email: email,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new Error("El usuario no existe");
    }

    if (user.email !== email|| user.password !== password) {
      throw new Error("Invalid Credentials");
    }

    return user;
  } catch (error) {
    throw new Error(error);
  }
};


const getUserProfile = async (id) => {
  try {
    const userProfile = await Usuario.findOne({
      where: {
        id: id,
        deletedAt: null,
      },
      include: [{ model: CestaRecompensas, as: 'cestaRecompensa' }],
      exclude: ["password"],
      attributes: { exclude: ["deletedAt"] },
    });

    if (!userProfile) {
      throw new Error("El usuario no existe");
    }
    return userProfile;
  } catch (error) {
    throw new Error(error);
  }
};


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

    //Crear un registro en la tabla cestaRecompensas
    const newCestaRecompensas = await CestaRecompensas.create(
      { name: `Cesta de ${usuario.fullName}` },
      { transaction }
    );

    // Crear el nuevo registro de usuario con el id de la cestaRecompensas creada
    const newUser = await Usuario.create(
      {
        ...usuario,

        basketRewardsId: newCestaRecompensas.id,

    
      //Si en el body no se pasa un valor para la columna rol, se le asigna el rol 1
      rolesId: usuario.rolesId ? usuario.rolesId : 1,        
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
    const validOptions = ["id", "fullName", "telefono", "email"];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const users = await Usuario.findAll({
      where,
      attributes: { exclude: ["deletedAt"] },
    });

    return users;
  } catch (error) {
    console.error(
      "The organization/s could not be retrieved due to an error.",
      error
    );
    throw error;
  }
};

const updateUserById = async (id, usuario) => {
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      throw new Error("The user does not exist.");
    }
    const updatedUser = await user.update(usuario);
    return updatedUser;
  } catch (error) {
    console.error("The user could not be updated due to an error.", error);
    throw error;
  }
};

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


    await CestaRecompensas.destroy({ where: { id: id } });


    

    return user;
  } catch (error) {
    console.error('Ocurrió un error al eliminar el usuario.', error);
    throw error;
  }
};

module.exports = {
  loginUser,
  getUserProfile,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
