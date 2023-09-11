const { CourseService } = require("../services");
const { validationResult } = require("express-validator");

const createCourse = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ 
      errors: result.array() 
    });
  }
  const {
    name,
    image,
    description,
    maxStudents,
    start,
    end,
    active,
    price,
    requirement,
    teacher,
    CourseCategoryName,
  } = req.body;

  try {
    const newCourse = await CourseService.createCourse({
      name,
      image,
      description,
      maxStudents,
      start,
      end,
      active,
      price,
      requirement,
      teacher,
      CourseCategoryName,
    });

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};
const getCourseById = async (req, res) => {
  const courseId = req.params.CourseId;
  try {
    const course = await CourseService.getCourse(courseId);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const getCourses = async (req, res) => {
  try {
    const course = await CourseService.getCourses();
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const updateCourse = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ 
      errors: result.array() 
    });
  }
  const courseId = req.params.CourseId;
  const {
    name,
    image,
    description,
    maxStudents,
    start,
    end,
    active,
    price,
    requirement,
    teacher,
  } = req.body;
  try {
    const newCourse = await CourseService.updateCourse(courseId, {
      name,
      image,
      description,
      maxStudents,
      start,
      end,
      active,
      price,
      requirement,
      teacher,
    });
    res.status(200).json(newCourse);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const deleteCourse = async (req, res) => {
  const courseId = req.params.CourseId;
  try {
    const Course = await CourseService.deleteCourse(courseId);
    res.status(200).json(Course);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

module.exports = {
  createCourse,
  getCourseById,
  getCourses,
  updateCourse,
  deleteCourse,
};
