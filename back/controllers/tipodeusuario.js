const { tipoDeUsuarioService } = require('../services');

const allTipoDeUsuarios = async (req, res, next) => {
  try {
    const tiposDeUsuario = await tipoDeUsuarioService.allTipoDeUsuarios();
    res.status(201).json(tiposDeUsuario);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

module.exports = {
  allTipoDeUsuarios,
};
