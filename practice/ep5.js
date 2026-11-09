// episode 5
  

// ??????ROUTING?????

// const express = require("express");

// const app = express();

// app.use("/user",
//     (req,res,next) => {
//     console.log("handle the route user 1")
//     //res.send("Response 1!!!");
//     next();
// },
//     (req,res,next) => {
//     console.log("handle the route user 2")
//    // res.send("Response 2!!!");
//     next();
// },
//     (req,res,next) => {
//     console.log("handle the route user 3")
//    // res.send("Response 3!!");
//     next();
// },
// (req,res,next) => {
//     console.log("handle the second route user 4");
//    // res.send("Response 4!!");
//     next();
// },    (req,res,next) => {
//     console.log("handle the route user 5")
//     res.send("Response 5!!!");
//     next();
// },);



// ///////MIDDLE WARES////////



// app.get("/admin/getalldata", (req,res) =>{
//     //logic of checking if the code is authorized

//     const token = "jhsajhsjakhajs"
//     const isadminauthorised = token === "xyz";
//     if(isadminauthorised){
//         res.send("All data send");
//     }
//     else {
//         res.status(401).send("unauthorised request");
//     }
// });



// app.get("/admin/deleteuser", (req,res) =>{
//     //logic of checking if the code is authorized

//     const token = "jhsajhsjakhajs"
//     const isadminauthorised = token === "xyz";
//     if(isadminauthorised){
//         res.send("Delete a user");
//     }
//     else {
//         res.status(401).send("unauthorised request");
//     }
// });

// iski jagah hmlog ye karenge instead.......


// //instead wee will do this

// //this will handle all request coming to admin
// app.use("/admin", (req,rs,next) => {
//     console.log("admin auth is getting checked")
//   const token = "xyz";
//   const isadminvalid = token === "xyz"
//   if(!isadminvalid){
//     res.status(401).send("Unauthorised acces");
//   }
//   else{
//     next();
//   }
// });

// app.get("/user",(req,res) => {
//     res.send("user data send");
// });

// app.get("/admin/getalldata",(req,res) => {
//     res.send("all data send");
// });

// app.get("/admin/deleteuser",(req,res) => {
//     res.send("Delete a user");
// });







// // error Handling 




// app.get("/getusersdata", (req,res) => {
//     try{
//     //logic of db call

//     throw new error("gsdhsg");
//     res.send("user data send");
//     }   catch(err){
//         res.status(500).send("something went wrong");
//     } 
// });

// app.use("/", (err,req,res,next) => {
//     if(err){
//         //log your error
//         res.status(500).send("something went wrong");
//     }
// });


// app.listen(3000, () => {
// console.log("Server is succesfully listening on port 3000....")
// });