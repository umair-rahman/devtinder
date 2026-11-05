const express = require("express");

const app = express();

app.use("/user",
    (req,res,next) => {
    console.log("handle the route user 1")
    //res.send("Response 1!!!");
    next();
},
    (req,res,next) => {
    console.log("handle the route user 2")
   // res.send("Response 2!!!");
    next();
},
    (req,res,next) => {
    console.log("handle the route user 3")
   // res.send("Response 3!!");
    next();
},
(req,res,next) => {
    console.log("handle the second route user 4");
   // res.send("Response 4!!");
    next();
},    (req,res,next) => {
    console.log("handle the route user 5")
    res.send("Response 5!!!");
    next();
},);



app.listen(3000, () => {
console.log("Server is succesfully listening on port 3000....")
});