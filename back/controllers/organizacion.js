const { orgService } = require("../services");
const jwt = require("jsonwebtoken");
const fs = require("fs-extra");
require("dotenv").config();
const { validationResult } = require("express-validator");
const cloudinary = require("../config/cloudinary");

const loginOrganization = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  try {
    const { email, cuit, password } = req.body;

    // Verificar credenciales
    const organization = await orgService.loginOrg(email, cuit, password);

    if (!organization) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generar token
    const token = jwt.sign(
      {
        orgId: organization.id,
        orgEmail: organization.email,
        orgCuit: organization.cuit,
        orgPassword: organization.password,
      },
      process.env.SESSION_SECRET,
      { expiresIn: 86400 }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const createOrganization = async (req, res) => {
  try {
    const { image, ...restOfData } = req.body;
    let imageUrl = "";
    let publicId = "";

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
      imageUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
    }

    const newOrganization = await orgService.createOrganization({
      image: { imageUrl, publicId },
      ...restOfData,
    });

    res.status(201).json({
      message: "The organization was successfully created",
      newOrganization,
    });

    if (req.file) {
      await fs.unlink(req.file.path);
    }
  } catch (err) {
    res.status(500).json({ action: "createOrganization", error: err.message });
  }
};

const getOrganizationsById = async (req, res) => {
  try {
    const orgId = req.orgId;
    const organization = await orgService.getOrganizationsById(orgId);
    res.json(organization);
  } catch (error) {
    res.status(500).json({ action: "getMyOrg", error: error.message });
  }
};

const getOrganizations = async (req, res) => {
  try {
    const organizations = await orgService.getOrganizations();
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ action: "getOrganizations", error: err.message });
  }
};

const updateOrganizationById = async (req, res) => {
  try {
    const orgId = req.orgId;

    const organization = await orgService.updateOrganizationById(
      req.body,
      orgId
    );
    if (!organization) {
      res.status(404).json({
        action: "updateOrganizationById",
        error: "Organization not found",
      });
    }

    res.status(200).json({
      message: "la organizacion se modifico exitosamente",
      organization,
    });
  } catch (err) {
    res
      .status(500)
      .json({ action: "updateOrganizationById", error: err.message });
  }
};

const deleteOrganizationById = async (req, res) => {
  try {
    const orgId = req.orgId;
    const organization = await orgService.deleteOrganizationById(orgId);
    if (!organization) {
      res.status(404).json({
        action: "deleteOrganizationById",
        error: "Organization not found",
      });
    }
    res.json(organization);
  } catch (err) {
    res
      .status(500)
      .json({ action: "deleteOrganizationById", error: err.message });
  }
};

// Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getOrganizationByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await orgService.getOrganizationByCriteria(
      queryOptions,
      bodyOptions
    );
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ action: "getUserByCriteria", error: err.message });
  }
};

const getOrganizationByLocation = async (req, res, next) => {
  try {
    const organizationFound = await orgService.getOrganizationByLocation(
      req.query.location,
      req.query.opportunityType
    );
    if (!organizationFound) {
      res
        .status(404)
        .json({ message: `No organization with the location ${req.query}` });
      return;
    }
    res.status(200).json({
      items: organizationFound.length,
      organizations: organizationFound,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
    next();
  }
};

const updatePhotoMyProfile = async (req, res, next) => {
  try {
    let imageUrl = "";
    let publicId = "";

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
      imageUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
    }

    const photoUpdate = await orgService.updatePhotoMyProfile(
      { imageUrl, publicId },
      req.orgId
    );
    res.status(200).json({
      message: "Profile picture was successfully edited",
      photoUpdate,
    });
    if (req.file) {
      await fs.unlink(req.file.path);
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while editing your profile picture.",
    });
    next();
  }
};

module.exports = {
  loginOrganization,
  getOrganizations,
  getOrganizationsById,
  getOrganizationByCriteria,
  createOrganization,
  updateOrganizationById,
  deleteOrganizationById,
  getOrganizationByLocation,
  updatePhotoMyProfile,
};
