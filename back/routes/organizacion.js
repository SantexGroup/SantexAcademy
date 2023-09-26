const express = require("express");

const orgRouter = express.Router();
const { orgController , usuarioEnVoluntariadoController } = require("../controllers");

const { verifyToken, isAdmin, isOrg } = require("../middleware/authMiddleware");

//orgRouter.get("/", orgController.getOrganizations);
orgRouter.get("/", orgController.getOrganizationByCriteria);
orgRouter.get("/search", orgController.getOrganizationByLocation);
orgRouter.put("/", verifyToken, isOrg, orgController.updateOrganizationById);

orgRouter.delete(
  "/me",
  verifyToken,
  isOrg,
  orgController.deleteOrganizationById
);

orgRouter.delete(
  "/:id",
  verifyToken,
  isAdmin,
  orgController.deleteOrganizationById
);

//todo!! ver de que manera la organizacion pueda ver que voluntariados estan finalizados para para que la org pueda acreditar las recompensas a los voluntarios

orgRouter.get("/postulation/completed", verifyToken, isOrg, usuarioEnVoluntariadoController.getCompletedPostulation);

// orgRouter.post("/postulation/accreditation/:")

module.exports = orgRouter;

// rutas habilitadas para /search
/*
http://localhost:4001/api/v1/org/search?location=argentina
http://localhost:4001/api/v1/org/search?opportunityType=voluntariado
http://localhost:4001/api/v1/org/search?location=argentina&opportunityType=voluntariado
*/
