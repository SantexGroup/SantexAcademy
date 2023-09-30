const { docenteService } = require('../services');

const allDocentes = async (req, res, next) => {
  try {
    const docentes = await docenteService.allDocentes();
    res.status(201).json(docentes);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

module.exports = {
    allDocentes
};
