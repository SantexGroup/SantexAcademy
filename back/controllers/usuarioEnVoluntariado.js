const { usuarioEnVoluntariadoService } = require("../services");

// Controlador para unirse a un voluntariado
const join = async (req, res) => {
  try {
    const userId = req.userId;
    const organizationId = req.params.idOrg;
    const idVolunteering = req.params.idVol;

    const postulation = await usuarioEnVoluntariadoService.join(
      userId,
      organizationId,
      idVolunteering
    );
    res.status(201).json({ action: "join", postulation });
  } catch (err) {
    res.status(500).json({ action: "join", error: err.message });
  }
};

const getJoins = async (req, res) => {
  try {
    const userId = req.userId;
    const allPostulationsUser = await usuarioEnVoluntariadoService.getJoins(
      userId
    );
    res.status(200).json(allPostulationsUser);
  } catch (err) {
    res
      .status(500)
      .json({ action: "getJoins", error: err.message });
  }
};

const getCompletedPostulation = async (req, res) => {
  try {
    const orgId = req.orgId;
    const volunteerings =
      await usuarioEnVoluntariadoService.getCompletedPostulation(orgId);
    if (!volunteerings) {
      res.status(404).json({
        action: "getCompletedPostulation",
        error: "Voluntariados not found.",
      });
    } else {
      res.json(volunteerings);
    }
  } catch (err) {
    res
      .status(500)
      .json({ action: "getCompletedPostulation", error: err.message });
  }
};

const updateStatusById = async (req, res) => {
  try {
    const postulationUpdate =
      await usuarioEnVoluntariadoService.updateStatusById(
        req.body.status,
        req.params.idPostulation
      );
    res
      .status(200)
      .json({ action: "updateStatusPostulation", postulationUpdate });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ action: "updateStatusById", error: err.message });
  }
};

const accreditationReward = async (req, res) => {
  try {
    const idOrg = req.orgId;
    await usuarioEnVoluntariadoService.accreditationReward(idOrg);
    res.status(200).send({ message: "Recompensas acreditadas con éxito." });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Hubo un problema al acreditar las recompensas." });
  }
};

const deleteJoinById = async (req, res) => {
  try {
    const result = await usuarioEnVoluntariadoService.deleteJoinById(
      req.params.idPostulation
    );
    res.status(200).json({ action: "deleteJoinById", message: result });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ action: "deleteJoinById", error: err.message });
  }
};

module.exports = {
  join,
  getJoins,
  getCompletedPostulation,
  updateStatusById,
  accreditationReward,
  deleteJoinById,
};
