const { CourseService } = require("../services");
const { validationResult } = require("express-validator");



const createCourse = async (req, res) => {
  const {
    name,
    description,
    maxStudents,
    start,
    end,
    active,
    price,
    CourseCategory,
    requirement,
    teacher
  } = req.body;
  console.log(req.body);

  const newCourse = await CourseService.createCourse({
    name,
    description,
    maxStudents,
    start,
    end,
    active,
    price,
    CourseCategory,
    requirement,
    teacher
  });

  res.status(201).json(newCourse);
};
const getByIdCourse = async (req, res) => {

  const CourseId = req.params.CourseId;
  console.log(CourseId)
  try {
    const Course = await CourseService.getCourse(CourseId);
    res.status(200).json(Course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourses = async (req, res) => {
  try {
    const Course = await CourseService.getCourses();
    res.status(200).json(Course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  //const result = validationResult(req);
  //if (!result.isEmpty()) {
 //   return res.status(403).send({ errors: result.array() });
  //}
  const CourseId = req.params.CourseId;
  const {
    name,
    description,
    maxStudents,
    start,
    end,
    active,
    price,
    requirement,
    teacher
    //CourseCategory,
  } = req.body;
  try {
    const newCourse = await CourseService.updateCourse(CourseId, {
      name,
      description,
      maxStudents,
      start,
      end,
      active,
      price,
      requirement,
      teacher
      //CourseCategory,
    });
    res.status(200).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  const CourseId = req.params.CourseId;
  try {
    const Course = await CourseService.deleteCourse(CourseId);
    res.status(200).json(Course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  getByIdCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
