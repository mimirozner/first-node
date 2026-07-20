/**
 * Middleware לאימות מפתח API.
 * הפונקציה בודקת האם קיים מפתח ב-Header של הבקשה ומשווה אותו למפתח המוגדר.
 */
const authMiddleware = (req, res, next) => {
    // שליפת המפתח מתוך ה-Headers של הבקשה שנשלחה
    const apiKey = req.headers['x-api-key'];

    // בדיקה: האם המפתח חסר?
    if (!apiKey) {
        return res.status(401).json({ message: "חסר מפתח אימות, נא לספק x-api-key ב-Headers" });
    }

    // בדיקה: האם המפתח שהתקבל שגוי?
    if (apiKey !== 'my-secret-key') {
        return res.status(403).json({ message: "מפתח אימות לא תקין, הגישה נדחתה" });
    }

    // אם עברנו את כל הבדיקות, ממשיכים לפעולה הבאה (ה-Controller)
    next();
};

module.exports = authMiddleware;