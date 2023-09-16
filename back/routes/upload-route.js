const express = require('express');
const uploadController = require('../controllers/upload-controller');
const uploadMiddleware = require('../middleware/upload.middleware');

const router = express.Router();

router.post('/', uploadMiddleware.multerUpload, uploadController.uploadFile);

module.exports = router;