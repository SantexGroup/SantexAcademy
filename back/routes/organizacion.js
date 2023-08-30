const express = require("express");

const orgRouter = express.Router();
const { orgController } = require("../controllers");

orgRouter.post("/create", orgController.createOrganization);
orgRouter.get("/", orgController.getOrganizations);
orgRouter.get("/", orgController.getOrganizationByCriteria);
orgRouter.get("/search", orgController.getOrganizationByLocation);
orgRouter.put("/update/:id", orgController.updateOrganizationById);
orgRouter.delete("/delete/:id", orgController.deleteOrganizationById);

module.exports = orgRouter;

// rutas habilitadas para /search
/*
http://localhost:4001/api/v1/org/search?location=argentina
http://localhost:4001/api/v1/org/search?opportunityType=voluntariado
http://localhost:4001/api/v1/org/search?location=argentina&opportunityType=voluntariado
*/
