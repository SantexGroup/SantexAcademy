const express = require("express");

const orgRouter = express.Router();
const {
  orgController,
  usuarioEnVoluntariadoController,
  recoveryController,
} = require("../controllers");

const { verifyToken, isOrg } = require("../middleware/authMiddleware");
const upload = require("../config/multerConfig");

orgRouter.get("/", orgController.getOrganizations);
orgRouter.get("/search", orgController.getOrganizationByLocation);
orgRouter.get(
  "/me/profile",
  verifyToken,
  isOrg,
  orgController.getOrganizationsById
);

orgRouter.put(
  "/me/update",
  verifyToken,
  isOrg,
  orgController.updateOrganizationById
);

orgRouter.put(
  "/me/updatePhoto",
  upload.single("file"),
  verifyToken,
  isOrg,
  orgController.updatePhotoMyProfile
);

orgRouter.delete(
  "/me",
  verifyToken,
  isOrg,
  orgController.deleteOrganizationById
);

orgRouter.get(
  "/postulation/completed",
  verifyToken,
  isOrg,
  usuarioEnVoluntariadoController.getCompletedPostulation
);

orgRouter.post(
  "/postulation/accreditation",
  verifyToken,
  isOrg,
  usuarioEnVoluntariadoController.accreditationReward
);

orgRouter.post(
  "/forgot-password",
  verifyToken,
  isOrg,
  recoveryController.forgotPassword
);
orgRouter.post(
  "/reset-password",
  verifyToken,
  isOrg,
  recoveryController.resetPassword
);

module.exports = orgRouter;

// rutas habilitadas para /search
/*
http://localhost:4001/api/v1/org/search?location=argentina
http://localhost:4001/api/v1/org/search?opportunityType=voluntariado
http://localhost:4001/api/v1/org/search?location=argentina&opportunityType=voluntariado
*/
