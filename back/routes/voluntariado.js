const express = require("express");
<<<<<<< Updated upstream

const voluntariadoRouter = express.Router();
const { voluntariadoController } = require("../controllers");
const { verifyToken, isAdmin, isOrg } = require("../middleware/authMiddleware");

=======
const voluntariadoRouter = express.Router();
const  {voluntariadoController}  = require("../controllers");

const { verifyToken, isAdmin, isOrg } = require("../middleware/authMiddleware");

voluntariadoRouter.get("/all", voluntariadoController.getAllVolunteers);
voluntariadoRouter.get("/:id", voluntariadoController.getVolunteerById);

>>>>>>> Stashed changes
voluntariadoRouter.post(
  "/",
  verifyToken,
  isOrg,
  voluntariadoController.createVoluntariado
);

<<<<<<< Updated upstream
voluntariadoRouter.get("/all", voluntariadoController.getAllVolunteers);
voluntariadoRouter.get("/:id", voluntariadoController.getVolunteerById);

=======
>>>>>>> Stashed changes
voluntariadoRouter.get(
  "/me/volunteerings",
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
  "/me/:idVol",
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
