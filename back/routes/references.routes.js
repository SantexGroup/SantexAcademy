const express = require('express');

const router = express.Router();

const ReferenceController = require('../controllers/references.controllers');

router.get('/:id', ReferenceController.referenceGet);
router.get('/all/:id', ReferenceController.referencesGetAll);
router.put('/update/:id', ReferenceController.referenceUpdate);
router.post('/add', ReferenceController.referenceCreate);
router.delete('/delete/:id', ReferenceController.referenceDelete);

module.exports = router;
