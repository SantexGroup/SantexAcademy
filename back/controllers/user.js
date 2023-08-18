const { userService } = require('../services');

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const createdUser = await userService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'Error when creating user' });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(404).json({ error: 'Users not found' });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUser(userId);
    res.json({ message: 'User successfully deleted', count: deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Error when deleting an user' });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await userService.updateUser(userId, userData);
    res.json({ message: 'User successfully updated ', count: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Error when updating user' });
  }
};

module.exports = {
  createUser, getUserById, getAllUsers, deleteUser, updateUser,
};
