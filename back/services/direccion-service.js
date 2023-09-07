const { provincia, localidad } = require('../models');

// desplegable provincias
async function listProvincia() {
    const provincias = await provincia.findAll();

    return provincias;
}

// desplegable ciudades
async function listLocalidad(idProv) {
    const localidades = await localidad.findAll({
        where: {
            idProvincia: idProv,
        }
    });

    return localidades;
}

module.exports = { listProvincia, listLocalidad };