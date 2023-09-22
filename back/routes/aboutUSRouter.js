const express = require('express');
const { body } = require('express-validator');
const { AboutUSController } = require('../controllers');

const router = express.Router();
router.get('/:aboutUSId', AboutUSController.getAboutUSById);
router.get('/', AboutUSController.getAboutUSs);
router.post(
  '/',
  body('title').isString(),
  body('subtitle').isString(),
  body('image').isString(),
  body('description').isString(),
  body('priority').isInt(),
  AboutUSController.createAboutUS,
);
router.put(
  '/:aboutUSId',
  body('title').isString(),
  body('subtitle').isString(),
  body('image').isString(),
  body('description').isString(),
  body('priority').isInt(),
  AboutUSController.updateAboutUS,
);
router.delete('/:aboutUSId', AboutUSController.deleteAboutUS);

module.exports = router;
