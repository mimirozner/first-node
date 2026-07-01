console.log("hi i am mimi ");
//const cowsay = require("cowsay");
const http=require("http");
const chalk=require("chalk").default;
chalk.level = 1;
const arr = [
    { id: 1, name: "Math5", discrpshen: "level-3" },
    { id: 2, name: "english", discrpshen: "level-5" }
];
const server=http.createServer((req,res)=>{
  // const cowMessage = cowsay.say({ text: "Hello! My Node.js server is working!" });
  
   res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(arr));
    

});
server.listen(3000,function(){
    console.log(chalk.green.bold("🚀 השרת פועל בהצלחה ומקשיב בפורט 3000!"));
    console.log(chalk.yellow("פתח דפדפן וכנס לכתובת: localhost:3000"));
});
