const { usuarioEnVoluntariadoProvider } = require("../providers");

// Servicio para unirse a un voluntariado
const join = async (userId, organizationId, idVolunteering) => {
  try {
    // Llamar al proveedor para crear la relación usuario-voluntariado
    await usuarioEnVoluntariadoProvider.join(
      userId,
      organizationId,
      idVolunteering
    );

    return "Usuario unido al voluntariado exitosamente.";
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getJoins = async (userId) => {
  try {
    const joins = await usuarioEnVoluntariadoProvider.getJoins(userId);

    return joins;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getCompletedPostulation = async (idOrg) => {
  try {
    const postulations =
      await usuarioEnVoluntariadoProvider.getCompletedPostulation(idOrg);
    return postulations;
  } catch (error) {
    console.error("Internal server error", error);
  }
};

const accreditationReward = async (idOrg) => {
  try {
    await usuarioEnVoluntariadoProvider.accreditationReward(idOrg);
  } catch (error) {
    console.error("Hubo un problema al acreditar las recompensas.", error);
    throw error;
  }
};

const updateStatusById = async (postulationId, status) => {
  try {
    const postulate = await usuarioEnVoluntariadoProvider.updateStatusById(
      status,
      postulationId
    );

    return postulate;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const deleteJoinById = async (postulateId) => {
  try {
    const postulate = await usuarioEnVoluntariadoProvider.deleteJoinById(
      postulateId
    );

    return postulate;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  join,
  getJoins,
  getCompletedPostulation,
  updateStatusById,
  accreditationReward,
  deleteJoinById,
};
// const { usuarioEnVoluntariadoProvider } = require("../providers");

// // Servicio para unirse a un voluntariado
// const join = async (userId, organizationId, idVolunteering) => {
//   try {
//     // Llamar al proveedor para crear la relación usuario-voluntariado
//     await usuarioEnVoluntariadoProvider.join(
//       userId,
//       organizationId,
//       idVolunteering
//     );

//     return "Usuario unido al voluntariado exitosamente.";
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

// const getJoins = async (userId) => {
//   try {
//     const joins = await usuarioEnVoluntariadoProvider.getJoins(userId);

//     return joins;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

// const getCompletedPostulation = async (idOrg) => {
//   try {
//     const postulations =
//       await usuarioEnVoluntariadoProvider.getCompletedPostulation(idOrg);
//     return postulations;
//   } catch (error) {
//     console.error("Internal server error", error);
//   }
// };

// const accreditationReward = async (idOrg) => {
//   try {
//     await usuarioEnVoluntariadoProvider.accreditationReward(idOrg);
//   } catch (error) {
//     console.error("Hubo un problema al acreditar las recompensas.", error);
//     throw error;
//   }
// };

// const updateStatusById = async (postulateId, status) => {
//   try {
//     const postulate = await usuarioEnVoluntariadoProvider.updateStatusById(
//       postulateId,
//       status
//     );

//     return postulate;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

// const deleteJoinById = async (postulateId) => {
//   try {
//     const postulate = await usuarioEnVoluntariadoProvider.deleteJoinById(
//       postulateId
//     );

//     return postulate;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

// module.exports = {
//   join,
//   getJoins,
//   getCompletedPostulation,
//   updateStatusById,
//   accreditationReward,
//   deleteJoinById,
// };
