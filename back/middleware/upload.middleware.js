const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const MIMETYPES = ['image/jpeg', 'image/png'];

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (MIMETYPES.includes(file.mimetype)) cb(null, true);
        else cb(new Error(`Solo se permiten archivos ${MIMETYPES.join(' ')}`));
    },    
    limits: {
        fieldSize: 10000000,
    }
});

const multerUpload = upload.array('images', 10);

module.exports = { multerUpload };