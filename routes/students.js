const authMiddleware = require('../middleware');
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// פעולות צפייה (לא דורשות מפתח)
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);

// פעולות עריכה (דורשות מפתח - הוספנו את ה-authMiddleware)
router.post('/', authMiddleware, studentController.createStudent);
router.put('/:id', authMiddleware, studentController.updateStudent);
router.delete('/:id', authMiddleware, studentController.deleteStudent);

module.exports = router;