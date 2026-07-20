const courseService = require('../services/coursesService');

/**
 * מטפל בבקשת GET ומחזיר את כל הקורסים
 */
exports.getAllCourses = (req, res) => {
    const courses = courseService.getAll();
    res.json(courses);
};