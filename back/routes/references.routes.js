const express = require('express');

const router = express.Router();

const ReferenceController = require('../controllers/references.controllers');

router.get('/getreference/:id', ReferenceController.referenceGet);
router.get('/allreferences/:id', ReferenceController.referencesGetAll);
router.put('/updatereference/:id', ReferenceController.referenceUpdate);
router.post('/addreference', ReferenceController.referenceCreate);
router.delete('/delreference/:id', ReferenceController.referenceDelete);

module.exports = router;
