const fs = require('fs');
const { google } = require('googleapis');
const googleValidation = require('../../config/files/google.config');
const upload = require('./multer.services');

const uploadDrive = ('/upload', upload, async (req, res, next) => {
  try {
    const gDrive = google.drive({
      version: 'v3',
      auth: await googleValidation(),
    });

    const fileMetadata = {
      name: req.file.originalname,
      parents: ['1U2zXpUVpRshEz35pnFjIbZoy7QTmSA3N'],
    };

    const media = {
      mimeType: req.file.mimetype,
      body: fs.createReadStream(req.file.path),
    };

    const { data } = await gDrive.files.create({
      resource: fileMetadata,
      media,
      fields: 'id',
    });

    const result = await (`https://drive.google.com/uc?export=view&id=${data.id}`);

    res.json(result);

    fs.unlinkSync(req.file.path);
  } catch (error) {
    next(error);
  }
});

module.exports = uploadDrive;
