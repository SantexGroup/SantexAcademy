const { provincia } = require('../models');

// desplegable provincia
async function listProvincia() {
    const provincias = await provincia.findAll();

    return provincias;
}

module.exports = { listProvincia };