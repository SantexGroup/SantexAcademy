// const ExpressValidator = require('express-validator');

// exports.checkValidationResult = function checkValidationResult(req, res, next) {
//   const result = ExpressValidator.validationResult(req);
//   if (result.isEmpty()) {
//     return next();
//   }
//   return res.status(400).json({ errors: result.array() });
// };

const { body, validationResult } = require('express-validator');
const { courseProvider } = require('../providers');

// Course Validations Rules
const createCourse = [
  body('title')
    .isString().withMessage('[title] is require String')
    .isLength({ max: 255 })
    .withMessage('[title] less than 255 characters.'),
  body('subtitle')
    .isString().withMessage('[subtitle] is require String')
    .isLength({ max: 255 })
    .withMessage('[subtitle] less than 255 characters.'),
  body('description')
    .isString()
    .withMessage('[description] is require String')
    .isLength({ max: 700 })
    .withMessage('[description] must be less than 700 words'),
  body('duration')
    .notEmpty()
    .withMessage('[duration] is required')
    .isNumeric()
    .withMessage('[duration] must be a number'),
  body('start_date')
    .notEmpty()
    .withMessage('[start_date] is required')
    .isDate()
    .withMessage('[start_date] must be a date'),
  body('capacity')
    .notEmpty()
    .withMessage('[capacity] is required')
    .isNumeric()
    .withMessage('[capacity] must be a number'),
  body('price')
    .notEmpty()
    .withMessage('[price] is required')
    .isNumeric()
    .withMessage('[price] must be a number'),
  body('due')
    .optional()
    .isNumeric()
    .withMessage('[due] must be a number'),
  body('has_surchage')
    .optional()
    .isBoolean()
    .withMessage('[has_surcharge] must be a boolean'),
  body('surchage_percentage')
    .optional()
    .isNumeric()
    .withMessage('[surchage_percentage] must be a number'),
  body('modality')
    .notEmpty()
    .withMessage('[modality] is required'),
  body('schedules')
    .notEmpty()
    .withMessage('[Schedules] are required'),
  body('banner')
    .isURL()
    .withMessage('The URL of the banner] image is invalid'),
];

const updateCourse = [
  body('title')
    .optional()
    .isString().withMessage('[title] is require String')
    .isLength({ max: 255 })
    .withMessage('[title] less than 255 characters.'),
  body('subtitle')
    .optional()
    .isString().withMessage('[subtitle] is require String')
    .isLength({ max: 255 })
    .withMessage('[subtitle] less than 255 characters.'),
  body('description')
    .optional()
    .isString()
    .withMessage('[description] is require String')
    .isLength({ max: 700 })
    .withMessage('[description] must be less than 700 words'),
  body('duration')
    .optional()
    .notEmpty()
    .withMessage('[duration] is required')
    .isNumeric()
    .withMessage('[duration] must be a number'),
  body('start_date')
    .optional()
    .notEmpty()
    .withMessage('[start_date] is required')
    .isDate()
    .withMessage('[start_date] must be a date'),
  body('capacity')
    .optional()
    .notEmpty()
    .withMessage('[capacity] is required')
    .isNumeric()
    .withMessage('[capacity] must be a number'),
  body('price')
    .optional()
    .notEmpty()
    .withMessage('[price] is required')
    .isNumeric()
    .withMessage('[price] must be a number'),
  body('due')
    .optional()
    .isNumeric()
    .withMessage('[due] must be a number'),
  body('has_surchage')
    .optional()
    .isBoolean()
    .withMessage('[has_surcharge] must be a boolean'),
  body('surchage_percentage')
    .optional()
    .isNumeric()
    .withMessage('[surchage_percentage] must be a number'),
  body('modality')
    .optional()
    .notEmpty()
    .withMessage('[modality] is required'),
  body('schedules')
    .optional()
    .notEmpty()
    .withMessage('[Schedules] are required'),
  body('banner')
    .optional()
    .isURL()
    .withMessage('The URL of the banner] image is invalid'),
];

// Course Details Validations Rules
const createCourseDetail = [
  body('title')
    .isString()
    .withMessage('[title] is require String')
    .isLength({ max: 255 })
    .withMessage('[title] less than 255 characters.'),
  body('paragraph1')
    .optional()
    .isString()
    .withMessage('[paragraph1] is require String')
    .isLength({ max: 700 })
    .withMessage('[paragraph1] must be less than 700 words'),
  body('paragraph2')
    .optional()
    .isString()
    .withMessage('[paragraph2] is require String')
    .isLength({ max: 700 })
    .withMessage('[paragraph2] must be less than 700 words'),
  body('image1url')
    .optional()
    .isURL()
    .withMessage('The URL of the [image1] is invalid'),
  body('image1url')
    .optional()
    .isURL()
    .withMessage('The URL of the [image1] is invalid'),
  body('courseId')
    .custom(async (value) => {
      const course = await courseProvider.getCourseById(value);
      if (!course) {
        throw new Error('[courseId] is not found');
      }
    }),
];

const updateCourseDetail = [
  body('title')
    .optional()
    .isString()
    .withMessage('[title] is require String')
    .isLength({ max: 255 })
    .withMessage('[title] less than 255 characters.'),
  body('paragraph1')
    .optional()
    .isString()
    .withMessage('[paragraph1] is require String')
    .isLength({ max: 700 })
    .withMessage('[paragraph1] must be less than 700 words'),
  body('paragraph2')
    .optional()
    .isString()
    .withMessage('[paragraph2] is require String')
    .isLength({ max: 700 })
    .withMessage('[paragraph2] must be less than 700 words'),
  body('image1url')
    .optional()
    .isURL()
    .withMessage('The URL of the [image1] is invalid'),
  body('image2url')
    .optional()
    .isURL()
    .withMessage('The URL of the [image2] is invalid'),
  body('courseId')
    .optional()
    .custom(async (value) => {
      const course = await courseProvider.getCourseById(value);
      if (!course) {
        throw new Error('[courseId] is not found');
      }
    }),
];

const checkValidationResult = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: result.array() });
};

module.exports = {
  createCourse, updateCourse, createCourseDetail, updateCourseDetail, checkValidationResult,
};
