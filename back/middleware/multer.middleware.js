//middleware para manejar imagenes mediante multer

const multer = require('multer');

    
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
        
    }    
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5   
    }  
})

module.exports = upload;