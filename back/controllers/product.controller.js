const findEntityByProperty = require('../services/find_entity_by_property.service');
const { User, Product } = require('../models');
const SaveEntityService = require('../services/save_entity.service');

const productController = (req, res, next) => {
  (async () => {
    const product = req.body;

    try {
      const existingUser = findEntityByProperty({ id: product.userId }, User);
      if (!existingUser) {
        next({
          extendBase: true,
          status: 404,
          message: 'El usuario no existe para este producto',
        });
      }

      // TODO: save photo

      await SaveEntityService(product, Product);

      res.status(201).json(product);
    } catch (error) {
      next({
        extendBsae: true,
        status: 500,
        message: 'Error al intentar iniciar sesión',
      });
    }
  })();
};

module.export = productController;
