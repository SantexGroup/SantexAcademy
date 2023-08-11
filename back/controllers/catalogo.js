const {userService} = require('../services');


const getCatalog = async (req, res) => {
    try {
      const users = await userService.getCatalog();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  module.exports = { getCatalog } 

