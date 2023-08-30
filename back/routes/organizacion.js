const express = require('express');

const orgRouter = express.Router();
const { orgController } = require('../controllers');

orgRouter.post('/create', orgController.createOrganization);
orgRouter.get('/', orgController.getOrganizations);
orgRouter.get('/', orgController.getOrganizationByCriteria);
orgRouter.put('/update/:id', orgController.updateOrganizationById);
orgRouter.delete('/delete/:id', orgController.deleteOrganizationById);


module.exports = orgRouter;
