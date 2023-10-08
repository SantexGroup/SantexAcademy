const express = require("express");
const { voluntariadoController } = require("../controllers");
const voluntariadoRouter = express.Router();
const { verifyToken, isAdmin, isOrg } = require("../middleware/authMiddleware");

voluntariadoRouter.get("/all", voluntariadoController.getAllVolunteers);
voluntariadoRouter.get("/:id", voluntariadoController.getVolunteerById);

voluntariadoRouter.post(
  "/",
  verifyToken,
  isOrg,
  voluntariadoController.createVoluntariado
);

voluntariadoRouter.get(
  "/me/:idOrg",
  verifyToken,
  isOrg,
  voluntariadoController.getVoluntariadosByOrganization
);


voluntariadoRouter.put(
  "/me/:idVol",
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
