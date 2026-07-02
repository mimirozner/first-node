console.log("hi i am mimi ");
//const cowsay = require("cowsay");
//const http=require("http");
const chalk=require("chalk").default;
const express = require('express');
const app = express();
chalk.level = 1;
const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');
//const server=http.createServer((req,res)=>{
  // const cowMessage = cowsay.say({ text: "Hello! My Node.js server is working!" });
  
  // res.setHeader("Content-Type", "application/json");
  //  res.end(JSON.stringify(arr));
    

//});
app.get('/',(req,res)=>{
res.send("<h1>ברוכה הבאה לשרת הניהול שלי</h1><p>זהו שרת לניהול תלמידים וקורסים.</p>");
});
app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);
app.listen(3000,function(){
    console.log(chalk.green.bold("🚀 השרת פועל בהצלחה ומקשיב בפורט 3000!"));
    console.log(chalk.yellow("פתח דפדפן וכנס לכתובת: localhost:3000"));
});

