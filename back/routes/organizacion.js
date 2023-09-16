const express = require("express");

const orgRouter = express.Router();
const { orgController } = require("../controllers");

const  { verifyToken , isAdmin, isOrg  }  = require('../middleware/authMiddleware');


//orgRouter.get("/", orgController.getOrganizations);
orgRouter.get("/",verifyToken, isOrg, orgController.getOrganizationByCriteria);
orgRouter.get("/search", orgController.getOrganizationByLocation);
orgRouter.put("/update/:id",verifyToken, orgController.updateOrganizationById);

orgRouter.delete("/delete/:id", verifyToken, isAdmin, orgController.deleteOrganizationById);

module.exports = orgRouter;

// rutas habilitadas para /search
/*
http://localhost:4001/api/v1/org/search?location=argentina
http://localhost:4001/api/v1/org/search?opportunityType=voluntariado
http://localhost:4001/api/v1/org/search?location=argentina&opportunityType=voluntariado
*/
