const express = require('express');
const router = express.Router();
const students = require('../data/studentsData');
router.get('/',(req,res)=>{res.json(students);});
// GET בודד
router.get('/:id', (req, res) => { 
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.json(student); // נמצא! מחזירים את האובייקט
    } else {
        res.status(404).json({ message: "תלמיד לא נמצא" }); // לא נמצא!
    }
});

// POST
router.post('/', (req, res) => { 
    const newStudent = req.body;
newStudent.id = students.length + 1;
    students.push(newStudent);
    res.status(201).json(newStudent);

});

// PUT
router.put('/:id', (req, res) => {
    console.log("Params ID:", req.params.id);
    console.log("Request Body:", req.body);
    
    const id = parseInt(req.params.id);
    const updatedInfo = req.body;

    const index = students.findIndex(s => s.id === id);

    if (index !== -1) {
        // הוסף את השורה הזו כדי לוודא שאתה לא מנסה להגדיר property לערך לא קיים
        console.log("Updating student at index:", index);
        
        students[index] = { ...students[index], ...updatedInfo };
        res.json({ message: "התלמיד עודכן בהצלחה!", student: students[index] });
    } else {
        res.status(404).json({ message: "תלמיד לא נמצא" });
    }
});
// DELETE
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index !== -1) {
        // מוחקים את התלמיד מהמערך
        students.splice(index, 1);
        res.json({ message: "התלמיד נמחק בהצלחה!" });
    } else {
        res.status(404).json({ message: "תלמיד לא נמצא" });
    }
  });
module.exports = router;