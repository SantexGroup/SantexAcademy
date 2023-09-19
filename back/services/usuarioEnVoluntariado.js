const {
  usuarioEnVoluntariadoProvider,
  userProvider,
  voluntariadoProvider,
} = require('../providers');

const join = async (userId, idVoluntariado) => {
  try {
    const volunteering = voluntariadoProvider.getVoluntariadosByCriteria({ idVoluntariado });
    if (!volunteering) {
      return 'Volunteering not found.';
    }

    const volunteerCount = await usuarioEnVoluntariadoProvider.count(idVoluntariado);

    if (volunteerCount >= volunteering.spots) {
      return 'Volunteering is full.';
    }

    const user = await userProvider.getUserProfile(userId);
    if (!user) {
      return 'User not found.';
    }

    const joint = await usuarioEnVoluntariadoProvider.join(userId, idVoluntariado);
    return joint;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { join };
