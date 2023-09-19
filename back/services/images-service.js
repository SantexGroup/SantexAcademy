const { Images } = require("../models");

// guardar registros de imagenes
async function saveImages(imageUrl, idProd) {
    const image = new Images();

    image.url = imageUrl;
    image.idProducto = idProd;

    const imageCreated = await image.save();

    return imageCreated;
}

module.exports = { saveImages };