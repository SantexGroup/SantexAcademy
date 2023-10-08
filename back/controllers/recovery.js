const { orgService, userService, recoveryService } = require("../services");
const { RecoveryToken } = require("../models");
const bcrypt = require("bcrypt");

const forgotPassword = async (req, res) => {
  try {
    let email;
    let resultFound;
    let type;
    let id;

    if (req.orgId) {
      id = req.orgId;
      resultFound = await orgService.getOrganizationsById(id);
      email = resultFound.email;
      type = "org";
    } else if (req.userId) {
      id = req.userId;
      resultFound = await userService.getUserByUserId(id);
      email = resultFound.userEmail;
      type = "user";
    } else {
      return res.status(400).json({ message: "Email no encontrado" });
    }

    // Verificar si se encontró un resultado
    if (!resultFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Generar un token de recuperación
    const recoveryToken = await recoveryService.generateRecoveryToken({
      orgId: type === "org" ? id : undefined,
      userId: type === "user" ? id : undefined,
    });

    // Enviar el correo electrónico con el token de recuperación
    await recoveryService.sendRecoveryEmail(email, recoveryToken);

    return res.status(200).json({ message: "Correo de recuperación enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en la solicitud de recuperación" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { newPassword, recoveryToken } = req.body;
    const orgId = req.orgId;
    console.log("req.orgId "+ req.orgId )
    // Verifica el token de recuperación
    const validToken = await RecoveryToken.findOne({
      token: recoveryToken,
      orgId,
    });
    if (!validToken) {
      return res.status(400).json({ message: "Token inválido o ya expirado" });
    }

    // Actualiza la contraseña del usuario
    const updatedOrg = await orgService.updatePassword(orgId, newPassword);
    console.log("updadedOrg "+ JSON.stringify(updatedOrg))

    if (!updatedOrg) {
      return res.status(404).json({ message: "Organización no encontrada" });
    }

    // Elimina el token de recuperación
    await RecoveryToken.destroy({
      where: { id: validToken.id  },
    });

    return res.status(200).json({ message: "Contraseña actualizada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en la solicitud de recuperación" });
  }
};

module.exports = { forgotPassword, resetPassword };
