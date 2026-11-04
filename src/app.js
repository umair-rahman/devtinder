const express = require("express");

const app = express();

// app.use("/hello/2",(req,res) => {
//     res.send("Aabra ka dabra");
// });

// app.use("/hello",(req,res) => {    ///hello12 not works beause
//  res.send("Hello Hello Hello hi"); //   its a diff string....
// });      


// app.use("/test",(req,res) => {
//     res.send("Hello from the server");
// });

// app.use("/",(req,res) => {
 //   res.send("SALAM UMAIR");
//});


//Because of this neeche wala routes nhi chalenge becuase ye pehle
//chal jaega and "use" sare api ko handle karta hai ek sath....
app.use("/user", (req,res) => {
    res.send("HAHAHAHAHAAH");
})

// This will only handle get calls to "/user"
app.get("/user", (req,res) => {
    res.send({"firstname" : "Umair",  "lastname" : "Rahman"});
});

app.post("/user", (req,res) => {
    // saving data to the database
    res.send("Data succesfully send to the database...");
});

app.delete("/user", (req,res) => {
    res.send("Deleted succesfully");
})

//this will match all http calls to /test
app.use("/test",(req,res) => {
    res.send("Hello from the server");
})




app.listen(3000, () => {
console.log("Server is succesfully listening on port 3000....")
});