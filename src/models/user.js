const mongoose = require("mongoose");
const validator = require("validator");
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
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid email : " + value);
        }
        }
    },
    password : {
        type : String,
        required:true,
        validate(value){
        if(!validator.isStrongPassword(value)){
            throw new Error("weak password : " + value);
        }
        }       
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
       validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid url : " + value);
        }
        }
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