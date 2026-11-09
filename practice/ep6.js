// Episode 6


// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const express = require("express");
// const connectDB = require("./config/database");
// const app = express();
// const User = require("./models/user");

// app.post("/signup", async(req,res) => {
//     const user = new User({
//         firstName : "Sumaira",
//         lastName : "Rahman Khan",
//         emailId : "sumaira.mzp@gmail.com",
//         password : "32eedawavshgsahsg",
//     });
// try{
//    await user.save();
//    res.send("User added successfully");
//   }
// catch(err){
//     res.status(500).send("Erro : User not saved :" + err.message);
// }   
// });

// connectDB()
// .then(() => {
//     console.log("Database connection established");
//     app.listen(3000, () => {
//      console.log("Server is succesfully listening on port 3000....")
//     });
// })
// .catch((err) => {
//     console.log("Database cannot be connected");
//     console.log(err);
// });