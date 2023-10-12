const findEntityByProperty = require('../services/find_entity_by_property.service');
const { User, Product } = require('../models');
const SaveEntityService = require('../services/save_entity.service');
const decodeBase64 = require('../utils/decode_base64.util');
const saveFile = require('../utils/save_file.util');
const {
  PRODUCT_IMAGE_PATH,
} = require('../utils/consts/product_image_path.const');
const resolveNameAndExtension = require('../utils/resolve_name_and_extension.util');

const productController = (req, res, next) => {
  (async () => {
    const product = req.body;

    try {
      await findEntityByProperty({ id: product.userId }, User);

      res.status(201).json(product);
    } catch (error) {
      next({
        extendBase: true,
        status: error.status || 500,
        message: error.message || 'Error interno del servidor',
      });
    }
  })();
};

module.exports = productController;
