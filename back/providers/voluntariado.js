const { Voluntariado } = require("../models");
const { Organizacion } = require("../models");

const createVoluntariado = async (idOrg, voluntariado) => {
  try {
    const newVoluntariado = await Voluntariado.create({
      ...voluntariado,
      organizationId: idOrg,
    });
    return newVoluntariado;
  } catch (error) {
    console.error(
      "The volunteering could not be created due to an error.",
      error
    );
    throw error;
  }
};

const getAllVolunteers = async () => {
  try {
    const volunteers = await Voluntariado.findAll({
      attributes: { exclude: ["deletedAt"] },
      include: [
        {
          model: Organizacion,
          as: "organization",
          attributes: ["name", "description", "category", "image"],
        },
      ],
    });

    return volunteers;
  } catch (error) {
    throw new Error(error);
  }
};

const getVolunteerById = async (id) => {
  try {
    const volunteer = await Voluntariado.findOne({
      where: { idVolunteering: id },
      attributes: { exclude: ["deletedAt"] },
      include: [
        {
          model: Organizacion,
          as: "organization",
          attributes: ["name", "description", "image"],
        },
      ],
    });

    return volunteer;
  } catch (error) {
    throw new Error(error);
  }
};

//Esta funcion se crea para que las organizaciones SOLO PUEDAN TRAER LOS VOLUNTARIADOS ASOCIADOS A SU ID
const getVoluntariadosByOrganizationId = async (idOrg) => {
  try {
    const voluntariados = await Voluntariado.findAll({
      where: { organizationId: idOrg, deletedAt: null },
      attributes: { exclude: ["deletedAt"] },
    });

    return voluntariados;
  } catch (error) {
    console.error(
      "The volunteering/s could not be retrieved due to an error.",
      error
    );
    throw error;
  }
};

const updateVoluntariadoById = async (idOrg, idVoluntariado, voluntariado) => {
  try {
    const [affectedRows] = await Voluntariado.update(voluntariado, {
      where: { idVoluntariado, organizationId: idOrg, deletedAt: null },
    });
    if (affectedRows === 0) {
      throw new Error("No se encontrò el registro.");
    }
    const volunteeringModified = await Voluntariado.findOne({
      where: { idVoluntariado },
    });
    return volunteeringModified;
  } catch (err) {
    console.error(
      "The volunteering could not be updated due to an error.",
      err
    );
    throw err;
  }
};

const deleteVoluntariadoById = async (idVol, idOrg) => {
  try {
    const volunteering = await Voluntariado.findOne({
      where: {
        idVolunteering: idVol,
        organizationId: idOrg,
        deletedAt: null,
      },
    });

    if (!volunteering) {
      throw new Error("Volunteering not found");
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await Voluntariado.update(
      { deletedAt: new Date() },
      { where: { idVolunteering: idVol, organizationId: idOrg } }
    );

    // // todo! --Eliminar físicamente el registro de la tabla CestaRecompensas--
    // await CestaRecompensas.destroy({ where: { id } });

    return volunteering;
  } catch (error) {
    console.error("Ocurrió un error al eliminar el voluntariado.", error);
    throw error;
  }
};

module.exports = {
  createVoluntariado,
  getAllVolunteers,
  getVolunteerById,
  getVoluntariadosByOrganizationId,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};