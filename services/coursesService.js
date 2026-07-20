const courses = require('../data/coursesData');

/**
 * מחזירה את כל רשימת הקורסים
 */
exports.getAll = () => {
    return courses;
};