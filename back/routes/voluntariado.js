const express = require("express");

const voluntariadoRouter = express.Router();
const { voluntariadoController } = require("../controllers");
const { verifyToken, isAdmin, isOrg } = require("../middleware/authMiddleware");

voluntariadoRouter.post(
  "/",
  verifyToken,
  isOrg,
  voluntariadoController.createVoluntariado
);

voluntariadoRouter.get(
  "/all",
  voluntariadoController.getVoluntariadosByCriteria
);

voluntariadoRouter.get(
  "/me/:idOrg",
  verifyToken,
  isOrg,
  voluntariadoController.getVoluntariadosByOrganization
);

voluntariadoRouter.put(
  "/:idOrg/:idVoluntariado",
  verifyToken,
  isOrg,
  voluntariadoController.updateVoluntariadoById
);

voluntariadoRouter.delete(
  "/:idOrg/:idVoluntariado",
  verifyToken,
  isOrg,
  voluntariadoController.deleteVoluntariadoById
);

voluntariadoRouter.delete(
  "/admin/:idOrg/:idVoluntariado",
  verifyToken,
  isAdmin,
  voluntariadoController.deleteVoluntariadoById
);

module.exports = voluntariadoRouter;
