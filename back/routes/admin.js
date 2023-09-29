const express = require("express");

const adminRouter = express.Router();

const {
  orgController,
  userController,
  voluntariadoController,
  productController,
  canjeController,
} = require("../controllers");

const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

//****** GESTION DE ORGANIZACIONES ******* */
adminRouter.delete(
  "/org/:id",
  verifyToken,
  isAdmin,
  orgController.deleteOrganizationById
);

//*******GESTION DE VOLUNTARIOS ****** */
adminRouter.delete("user/:id", verifyToken, isAdmin, userController.deleteUser);
adminRouter.get(
  "user/",
  verifyToken,
  isAdmin,
  userController.getUsersByCriteria
);

adminRouter.delete(
  "/volunteer/:idOrg/:idVoluntariado",
  verifyToken,
  isAdmin,
  voluntariadoController.deleteVoluntariadoById
);

//********** GESTION DE PRODUCTOS********* */

adminRouter.post(
  "/product",
  verifyToken,
  isAdmin,
  productController.createProduct
);
adminRouter.get(
  "/product",
  verifyToken,
  isAdmin,
  productController.getAllProducts
);
adminRouter.get(
  "/product/:id",
  verifyToken,
  isAdmin,
  productController.getProduct
);
adminRouter.put(
  "/product/:id",
  verifyToken,
  isAdmin,
  productController.updateProduct
);
adminRouter.delete(
  "product/:id",
  verifyToken,
  isAdmin,
  productController.deleteProduct
);

//*******GESTION DE ORDENES DE CANJE ******* */

adminRouter.get("orders/", verifyToken, isAdmin, canjeController.getAllOrders);
adminRouter.get(
  "orders/:id",
  verifyToken,
  isAdmin,
  canjeController.getOrderById
);
adminRouter.delete(
  "orders/:id",
  verifyToken,
  isAdmin,
  canjeController.deleteOrderById
);

module.exports = adminRouter;
