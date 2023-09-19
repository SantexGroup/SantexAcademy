const { usuarioEnVoluntariadoService } = require('../services');

const join = async (req, res) => {
  try {
    const { idUser, idVolunteering } = req.body;
    const joint = await usuarioEnVoluntariadoService.join(idUser, idVolunteering);

    if (joint === 'Volunteering not found.') {
      res.status(404).json({ action: 'join', error: 'Volunteering not found.' });
    }

    if (joint === 'Volunteering is full.') {
      res.status(409).json({ action: 'join', error: 'Volunteering is full.' });
    }

    if (joint === 'User not found.') {
      res.status(404).json({ action: 'join', error: 'User not found.' });
    }

    res.status(201).json(joint);
    
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

module.exports = { join };
