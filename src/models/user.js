const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        minlength:4,
        maxlength:50,
    },
    lastName : {
        type : String,
    },
    emailId : {
        type : String,
        required:true,
        lowercase:true,
        unique : true,
        trim:true,
    },
    password : {
        type : String,
        required:true,
    } ,
    age : {
        type : Number,
        min:18,
    },
    gender : {
        type : String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new error("gender dta is not valid");
            }
        },
    },
    about:{
        type:String,
        default:"This is default about",
    },
    photourl : {
        type : String,
    },
    skills :{
        type : [String],
    },
    
  },    
{
        timestamps:true,
 }
);

const User = mongoose.model("User",userSchema);

module.exports = User;