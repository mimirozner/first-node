// ייבוא הנתונים מהקובץ הרלוונטי
const students = require('../data/studentsData');

/**
 * מחזירה את כל רשימת התלמידים הקיימת
 */
exports.getAll = () => {
    return students;
};

/**
 * מחפשת תלמיד ספציפי לפי מזהה (ID)
 * @param {number} id - המזהה של התלמיד שרוצים למצוא
 * @returns {object|undefined} - מחזירה את אובייקט התלמיד אם נמצא, או undefined
 */
exports.getById = (id) => {
    return students.find(s => s.id === id);
};

/**
 * מוסיפה תלמיד חדש לרשימה ומקצה לו מזהה (ID) אוטומטי
 * @param {object} studentData - הנתונים של התלמיד החדש
 * @returns {object} - מחזירה את אובייקט התלמיד החדש שנוצר
 */
exports.add = (studentData) => {
    // יצירת אובייקט חדש עם ID מבוסס על אורך המערך הנוכחי
    const newStudent = { ...studentData, id: students.length + 1 };
    students.push(newStudent);
    return newStudent;
};

/**
 * מעדכנת פרטים של תלמיד קיים לפי ה-ID שלו
 * @param {number} id - ה-ID של התלמיד לעדכון
 * @param {object} updateData - הנתונים החדשים לעדכון
 * @returns {object|null} - מחזירה את התלמיד המעודכן או null אם לא נמצא
 */
exports.update = (id, updateData) => {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        // מיזוג הנתונים הקיימים עם הנתונים החדשים
        students[index] = { ...students[index], ...updateData };
        return students[index];
    }
    return null;
};

/**
 * מוחקת תלמיד מהרשימה לפי ה-ID שלו
 * @param {number} id - ה-ID של התלמיד למחיקה
 * @returns {boolean} - מחזירה true אם המחיקה הצליחה, false אחרת
 */
exports.delete = (id) => {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        return true;
    }
    return false;
};