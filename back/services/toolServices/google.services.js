const fs = require('fs');
const { google } = require('googleapis');
const googleValidation = require('../../config/files/google.config');
const upload = require('./multer.services');

const uploadDrive = ('/upload', upload, async (req, res) => {
  try {
    const gDrive = google.drive({
      version: 'v3',
      auth: await googleValidation(),
    });
    
    console.log("desde google service", req.file) //TODO ELIMIAR
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

    console.log('ID', data.id);

    /* https://drive.google.com/uc?export=view&id= */

    const result = await (data.id);

    res.json(result);

    fs.unlinkSync(req.file.path);
  } catch (error) {
    console.log(error);
  }
});

module.exports = uploadDrive;
