const Express = require('express');

const router = Express.Router();

const { postController } = require('../controllers');

router.post('/create', postController.createPost);

module.exports = router;
