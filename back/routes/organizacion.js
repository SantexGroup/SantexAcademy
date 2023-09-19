const express = require("express");

const orgRouter = express.Router();
const { orgController } = require("../controllers");

const  { verifyToken , isAdmin, isOrg  }  = require('../middleware/authMiddleware');

const { validationResult } = require('express-validator');
const { createAndUpdateOrganizationValidation } = require("../middleware/validation.OrgEntity");





//orgRouter.get("/", orgController.getOrganizations);
orgRouter.get("/",verifyToken, isAdmin, orgController.getOrganizationByCriteria);

orgRouter.get("/search", orgController.getOrganizationByLocation);

orgRouter.put("/:id",verifyToken, isOrg, createAndUpdateOrganizationValidation,
async (req, res) => {
  // Comprueba las validaciones antes de ejecutar el controlador de registro de organizaciones
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  orgController.updateOrganizationById(req, res);
});

orgRouter.delete("/me/:id", verifyToken, isOrg, orgController.deleteOrganizationById);
orgRouter.delete("/:id", verifyToken, isAdmin, orgController.deleteOrganizationById);

module.exports = orgRouter;

// rutas habilitadas para /search
/*
http://localhost:4001/api/v1/org/search?location=argentina
http://localhost:4001/api/v1/org/search?opportunityType=voluntariado
http://localhost:4001/api/v1/org/search?location=argentina&opportunityType=voluntariado
*/
