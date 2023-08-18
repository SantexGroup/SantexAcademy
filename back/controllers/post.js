const { PostServices } = require('../services');

const createPost = async (req, res) => {
  try {
    const newPost = await PostServices.createPostServ(req.body);
    res.status(201).send({
      newPost,
    });
  } catch (error) {
    res.status(400).json({
      action: 'createPost',
      error: error.mensaje,
    });
  }
};

module.exports = {
  createPost,
};
