const { userService } = require("../services");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fs = require("fs-extra");
const cloudinary = require("../config/cloudinary");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
        userPassword: user.password,
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

const createUser = async (req, res) => {
  try {
    const { image, ...restOfData } = req.body;

    let imageUrl = "";
    let publicId = "";

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
      imageUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
      await fs.unlink(req.file.path);
    }

    const newUser = await userService.createUser({
      image: { imageUrl, publicId },
      ...restOfData,
    });
    res.status(201).json(newUser);
  } catch (err) {
    if (err.message == "Validation error") {
      res.status(409).json({ action: "createUser", error: err.message });
    } else {
      res.status(500).json({ action: "createUser", error: err.message });
    }
  }
};

// Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getUsersByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await userService.getUsersByCriteria(
      queryOptions,
      bodyOptions
    );
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ action: "getUserByCriteria", error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUserById(req.params.id);
    res.status(204);
  } catch (err) {
    res.status(500).json({ action: "deleteUserById", error: err.message });
  }
};

// me/profile

const getMyUser = async (req, res) => {
  try {
    const userProfile = await userService.getMyUser(req.userId);
    res.status(200).json(userProfile);
  } catch (err) {
    res.status(500).json({ action: "getUserProfile", error: err.message });
  }
};

const updateMyUser = async (req, res) => {
  try {
    const userUpdate = await userService.updateMyUser(req.body, req.userId);
    res.status(200).json(userUpdate);
  } catch (err) {
    res.status(500).json({ action: "updateUserById", error: err.message });
  }
};

const deleteMyUser = async (req, res) => {
  try {
    const user = await userService.deleteUserById(req.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: "deleteUserById", error: err.message });
  }
};

module.exports = {
  loginUser,
  createUser,
  getUsersByCriteria,
  deleteUser,
  getMyUser,
  updateMyUser,
  deleteMyUser,
};
