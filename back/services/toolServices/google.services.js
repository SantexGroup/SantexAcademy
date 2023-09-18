const fs = require('fs');
const { google } = require('googleapis');
const oauth2Client = require('../../config/files/google.config');
const subir = require('./multer.services');

const subirAdrive = ('/subir', subir, async (req, res) => {
  try {
    const gDrive = google.drive({
      version: 'v3',
      auth: oauth2Client,
    });

    const fileMetadata = {
      name: req.file.originalname,
      parents: ['1WcqY4VfU6Qm8M5ELWwkGT4DAMpt9RPlR'],
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

    console.log(data.id);

    const result = await (data.id);

    res.json(result);

    fs.unlinkSync(req.file.path);
  } catch (error) {
    console.log(error);
  }
});

module.exports = subirAdrive;
