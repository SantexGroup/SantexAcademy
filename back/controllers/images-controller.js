const path = require('path');
const fs = require('fs-extra');
const imagesService = require('../services/images-service');

// guardar registros de imagenes
async function saveImages(req, res) {
    const { imageUrl } = req.params;
    const { idProd } = req.params;

    const images = await imagesService.saveImages(imageUrl, idProd);

    if (images) {
    res.status(200).send(images);
    } else {
        res.status(400).send('error en la carga')
    }
}

// obtener una imagen
async function getImages(req, res) {
    //const type = req.params.type;
    const image = req.params.image;
    const pathImage = path.resolve(__dirname, `../uploads/${image}`);

    if (await fs.existsSync(pathImage)) {
        res.sendFile(pathImage);
    } else {
        const pathNoimage = path.resolve(__dirname, `../uploads/no-image.jpeg`);
        res.sendFile(pathNoimage);
    }
}

module.exports = { getImages, saveImages };