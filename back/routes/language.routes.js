const express = require('express');

const router = express.Router();
const languageController = require('../controllers/language.controller');

router.get('/:id', languageController.languageGet);
router.get('/all/:id', languageController.languageGetAll);
router.post('/add', languageController.languageAdd);
router.put('/update/:id', languageController.languageUpdate);
// router.delete('/delete/:id', languageController.languageDelete);

module.exports = router;
