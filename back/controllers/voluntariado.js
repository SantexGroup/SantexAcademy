const { voluntariadoService } = require("../services");

const createVoluntariado = async (req, res) => {
  try {
    const idOrg = req.orgId;
    const volunteering = await voluntariadoService.createVoluntariado(
      idOrg,
      req.body
    );
    res.status(201).json(volunteering);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

const getAllVolunteers = async (req, res, next) => {
  try {
    const volunteerings = await voluntariadoService.getAllVolunteers();
    res.status(200).json({ items: volunteerings.length, volunteerings });
  } catch (err) {
    res
      .status(500)
      .json({ action: "getVoluntariadosByCriteria", error: err.message });
    next();
  }
};

const getVolunteerById = async (req, res, next) => {
  try {
    const volunteeringFound = await voluntariadoService.getVolunteerById(
      req.params.id
    );
    if (!volunteeringFound)
      res.status(404).json({
        message: `There is no volunteering with the ${req.params.id}`,
      });

    res.status(200).json({ volunteeringFound });
  } catch (err) {
    res
      .status(500)
      .json({ action: "getVoluntariadosByCriteria", error: err.message });
    next();
  }
};

const getVoluntariadosByOrganization = async (req, res) => {
  try {
    const volunteerings =
      await voluntariadoService.getVoluntariadosByOrganization(req.orgId);
    if (!volunteerings) {
      res.status(404).json({
        action: "getVoluntariadosByOrganization",
        error: "Voluntariados not found.",
      });
    } else {
      res.json(volunteerings);
    }
  } catch (err) {
    res
      .status(500)
      .json({ action: "getVoluntariadosByOrganization", error: err.message });
  }
};

const updateVoluntariadoById = async (req, res) => {
  try {
    const volunteering = await voluntariadoService.updateVoluntariadoById(
      req.body,
      req.orgId,
      req.params.idVol
    );
    if (!volunteering) {
      res.status(404).json({
        action: "updateVoluntariadoById",
        error: "Voluntariado not found.",
      });
    } else {
      res.json(volunteering);
    }
  } catch (err) {
    res
      .status(500)
      .json({ action: "updateVoluntariadoById", error: err.message });
  }
};

const deleteVoluntariadoById = async (req, res) => {
  try {
    const { idVoluntariado } = req.params;
    const volunteering = await voluntariadoService.deleteVoluntariadoById(
      idVoluntariado
    );
    if (!volunteering) {
      res.status(404).json({
        action: "deleteVoluntariadoById",
        error: "Voluntariado not found.",
      });
    } else {
      res.status(202).json(volunteering);
    }
  } catch (err) {
    res
      .status(500)
      .json({ action: "deleteVoluntariadoById", error: err.message });
  }
};

module.exports = {
  createVoluntariado,
  getAllVolunteers,
  getVolunteerById,
  getVoluntariadosByOrganization,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};
