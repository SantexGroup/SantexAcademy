const { cohortService } = require('../services');

const enrollStudentInCourse = async (req, res) => {
  const { courseId, studentId } = req.body;

  try {
    const cohort = await cohortService.enrollStudentInCourse({ courseId, studentId });
    return res.status(201).json({ message: 'Student enrolled in course successfully', cohort });
  } catch (error) {
    return res.status(500).json({ message: 'Error enrolling student in course', error: error.message });
  }
};

module.exports = {
  enrollStudentInCourse,
};
