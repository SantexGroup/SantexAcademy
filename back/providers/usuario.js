const { Usuario } = require("../models");
const { CestaRecompensas } = require("../models");
const { sequelize } = require("../config/db-config");
const { Op } = require("sequelize");
const { comparePassword, hashPassword } = require("../config/crypt");

const loginUser = async (email, password) => {
  try {
    const user = await Usuario.findOne({
      where: {
        email: email,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }
    const matchPassword = comparePassword(password, user.password);

    if (!matchPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (usuario) => {
  const { image, password, ...restOfData } = usuario;

  let transaction;
  try {
    transaction = await sequelize.transaction();

    const existingDeletedUser = await Usuario.findOne({
      where: {
        [Op.and]: [
          { deletedAt: { [Op.not]: null } }, // Buscar registros eliminados
          {
            [Op.or]: [
              { fullName: restOfData.fullName },
              { email: restOfData.email },
            ],
          },
        ],
      },
    });

    if (existingDeletedUser) {
      // Borrar el registro eliminado lógicamente
      await existingDeletedUser.destroy();
    }

    //Crear un registro en la tabla cestaRecompensas
    const newCestaRecompensas = await CestaRecompensas.create(
      { name: `Cesta de ${restOfData.fullName}` },
      { transaction }
    );

    // Crear el nuevo registro de usuario con el id de la cestaRecompensas creada
    const newUser = await Usuario.create(
      {
        image,
        password: hashPassword(password),
        basketRewardsId: newCestaRecompensas.id,
        rolesId: restOfData.rolesId ? restOfData.rolesId : 1,
        ...restOfData,
      },
      { transaction }
    );

    await transaction.commit();

    return {
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
    };
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error("The user could not be created due to an error.", err);
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

const getMyProfile = async (id) => {
  try {
    const userProfile = await Usuario.findOne({
      where: {
        id: id,
        deletedAt: null,
      },
      include: [{ model: CestaRecompensas, as: "cestaRecompensa" }],
      exclude: ["password"],
      attributes: { exclude: ["deletedAt"] },
    });

    if (!userProfile) {
      throw new Error("The user does not exist");
    }
    return userProfile;
  } catch (error) {
    throw new Error(error);
  }
};

const updateMyUser = async (usuario, id) => {
  try {
    const updatedUser = await Usuario.update(usuario, { where: { id: id } });
    return updatedUser;
  } catch (error) {
    console.error("The user could not be updated due to an error.", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await Usuario.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await Usuario.update(
      { deletedAt: new Date(), email: "" },
      { where: { id } }
    );

    await CestaRecompensas.destroy({ where: { id: id } });

    return user;
  } catch (error) {
    console.error("Ocurrió un error al eliminar el usuario.", error);
    throw error;
  }
};

module.exports = {
  loginUser,
  createUser,
  getUsersByCriteria,
  getMyProfile,
  updateMyUser,
  deleteUser,
};
