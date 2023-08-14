const express = require('express');
const SkillController = require('../controllers/skills.controllers');

const router = express.Router();

router.get('/:id', SkillController.skillGet);
router.get('/all/:id', SkillController.skillGetAll);
router.post('/add', SkillController.skillAdd);
router.put('/update/:id', SkillController.skillUpdate);
router.delete('/delete/:id', SkillController.skillDelete);

module.exports = router;
