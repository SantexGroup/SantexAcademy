const express = require("express");
const upload = require("../config/multerConfig");
const adminRouter = express.Router();

const {
  orgController,
  userController,
  voluntariadoController,
  productController,
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
  upload.single("file"),
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
  "/product/:id",
  verifyToken,
  isAdmin,
  productController.deleteProduct
);

//*******GESTION DE PEDIDOS **************/



module.exports = adminRouter;
