const express = require("express");

const app = express();

const {adminAuth,userAuth} = require("./middleware/auth");
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


//instead wee will do this

//this will handle all request coming to admin
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

         //     OORR

     app.use("/admin", adminAuth);         

app.get("/user", userAuth, (req,res) => {
    res.send("user data send");
});

app.get("/user/hello",(req,res) => {
    res.send("try try user data send");
});

app.get("/admin/getalldata",(req,res) => {
    res.send("all data send");
});

app.get("/admin/deleteuser",(req,res) => {
    res.send("Delete a user");
});

app.listen(3000, () => {
console.log("Server is succesfully listening on port 3000....")
});