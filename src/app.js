const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

//ham postman se user details bhej rhe hain jo database me 
//save ho rha hai user collection me
app.post("/signup", async(req,res) => {

//Creating a new instance of a user model...    
    const user = new User(req.body);
try{
   await user.save();
   res.send("User added successfully");
  }
catch(err){
    res.status(500).send("Erro : User not saved :" + err.message);
}   
});

//Get user by email
app.get("/user", async(req,res) => {
    const email = req.body.emailId;
try{
    const user = await(User.findOne({emailId : email}));
    if(!user){
        res.send("User not found"); 
    }
    else{
    res.send(user);
    }
    // const users = await(User.find({emailId : email}));
    // if(users.length === 0){
    // res.send("User not found");
    // }
    // else{
    // res.send(users);
    // }
}
catch(err){
    res.status(401).send("Something went wrong");
}
});

//Feed Api -> GET/FEED -> get all user from the database
app.get("/feed", async(req,res) => {
    try{
    const users = await(User.find({}));
    res.send(users);
    }
catch(err){
    res.status(401).send("something went wrong");
}
});

//Delete user by id
app.delete("/user", async(req,res) => {
    const userid = req.body.id;
    try{
       //const user = await User.findByIdAndDelete({_id:userid});
         await User.findByIdAndDelete(userid);
         res.send("User deleeted successfully");
    }
    catch(err){
        res.status(400).send("something went wrong");
    }
});

// update a user
app.patch("/user", async(req,res) => {
     const userid = req.body.id;
     const data = req.body;
try{
    const user = await User.findByIdAndUpdate({_id:userid},data,
        {returndocument : "after",});
    console.log(user);
    res.send("user updated successfully"); 
    }
catch(err){
    res.status(400).send("wrong");
}
});

connectDB()
.then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
     console.log("Server is succesfully listening on port 3000....")
    });
})
.catch((err) => {
    console.log("Database cannot be connected");
    console.log(err);
});
