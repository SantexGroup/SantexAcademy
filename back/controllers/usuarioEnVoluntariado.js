const {usuarioEnVoluntariadoService} = require('../services');

// Controlador para unirse a un voluntariado
const join = async (req, res) => {
  try {

    const userId = req.userId;
    const {organizationId} = req.body
    const { userId: userIdFromBody, idVolunteering } = req.body;

    console.log ("userIdFromBody",userIdFromBody);
    if (userId !== userIdFromBody) {
      return res.status(403).json({ action: 'join', error: 'No tienes permiso para realizar esta acción' });
    }

    const result = await usuarioEnVoluntariadoService.join(userId, organizationId, idVolunteering);
    res.status(201).json({ action: 'join', message: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ action: 'join', error: 'Internal server error.' });
  }
};

const getJoins= async (req, res) => {
  try {
    const userId = req.userId;
    const result = await usuarioEnVoluntariadoService.getJoins(userId);
    res.status(200).json({ action: 'getJoins', message: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ action: 'getJoins', error: 'Internal server error.' });
  }

}

  const getCompletedPostulation = async (req, res) => {
    try {
      const orgId = req.orgId;
      const volunteerings = await usuarioEnVoluntariadoService.getCompletedPostulation(orgId);
      if (!volunteerings) {
        res.status(404).json({ action: 'getCompletedPostulation', error: 'Voluntariados not found.' });
      } else {
        res.json(volunteerings);
      }
    } catch (err) {
      res.status(500).json({ action: 'getCompletedPostulation', error: err.message });
    }
  }

const updateStatusById = async (req, res) => {
  try {
    const { postulateId,status } = req.body;
    const result = await usuarioEnVoluntariadoService.updateStatusById(postulateId, status);
    res.status(200).json({ action: 'updateStatusById', message: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ action: 'updateStatusById', error: 'Internal server error.' });
  }

}

const deleteJoinById = async (req, res) => {

  try {
    const { postulateId } = req.body;
    const result = await usuarioEnVoluntariadoService.deleteJoinById(postulateId);
    res.status(200).json({ action: 'deleteJoinById', message: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ action: 'deleteJoinById', error: 'Internal server error.' });
  }

}

module.exports = {
  join,
  getJoins,
  getCompletedPostulation,
  updateStatusById,
  deleteJoinById
};
