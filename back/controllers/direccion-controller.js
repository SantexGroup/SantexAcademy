const direccionService = require('../services/direccion-service');

async function listProvincia(req, res) {
    const provincias = await direccionService.listProvincia();

    console.log(provincias);
    res.status(201).send(provincias);
}

module.exports = { listProvincia };