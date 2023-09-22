const {usuarioEnVoluntariadoService} = require('../services');

// Controlador para unirse a un voluntariado
const join = async (req, res) => {
  try {
    const { userId, idVolunteering } = req.body;
    const result = await usuarioEnVoluntariadoService.join(userId, idVolunteering);
    res.status(201).json({ action: 'join', message: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ action: 'join', error: 'Internal server error.' });
  }
};

module.exports = {
  join,
};
