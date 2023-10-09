/* eslint-disable consistent-return */
const { validationResult } = require('express-validator');
const { AboutUSService } = require('../services');

const getAboutUSs = async (req, res) => {
  try {
    const aboutUSs = await AboutUSService.getAboutUSs();
    res.status(200).json(aboutUSs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createAboutUS = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const {
    title, subtitle, image, description, priority, active,
  } = req.body;
  try {
    const newAboutUS = await AboutUSService.createAboutUS({
      title, subtitle, image, description, priority, active,
    });
    res.status(201).json(newAboutUS);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAboutUSById = async (req, res) => {
  const { aboutUSId } = req.params;
  try {
    const aboutUS = await AboutUSService.getAboutUSById(aboutUSId);
    res.status(200).json(aboutUS);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateAboutUS = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }
  const { aboutUSId } = req.params;
  const {
    title, subtitle, image, description, priority, active,
  } = req.body;
  try {
    const newAboutUS = await AboutUSService.updateAboutUS(aboutUSId, {
      title, subtitle, image, description, priority, active,
    });
    res.status(200).json(newAboutUS);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteAboutUS = async (req, res) => {
  const { aboutUSId } = req.params;
  try {
    const aboutUS = await AboutUSService.deleteAboutUS(aboutUSId);
    res.status(200).json(aboutUS);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAboutUS,
  getAboutUSById,
  getAboutUSs,
  updateAboutUS,
  deleteAboutUS,
};
