const express = require('express');
const router = express.Router();
const courses = require('../data/coursesData');
router.get('/',(req,res)=>{res.json(courses);})
module.exports = router;