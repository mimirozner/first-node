const studentService = require('../services/studentsService');

exports.getAllStudents = (req, res) => {
    res.json(studentService.getAll());
};

exports.getStudentById = (req, res) => {
    const student = studentService.getById(parseInt(req.params.id));
    if (student) res.json(student);
    else res.status(404).json({ message: "תלמיד לא נמצא" });
};

exports.createStudent = (req, res) => {
    const newStudent = studentService.add(req.body);
    res.status(201).json(newStudent);
};

exports.updateStudent = (req, res) => {
    const updated = studentService.update(parseInt(req.params.id), req.body);
    if (updated) res.json({ message: "התלמיד עודכן!", student: updated });
    else res.status(404).json({ message: "תלמיד לא נמצא" });
};

exports.deleteStudent = (req, res) => {
    const deleted = studentService.delete(parseInt(req.params.id));
    if (deleted) res.json({ message: "התלמיד נמחק בהצלחה!" });
    else res.status(404).json({ message: "תלמיד לא נמצא" });
};