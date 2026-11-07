const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://umair13mzp_db_user:hrwTOaM4duk6zYRN@umair777.qo8di6q.mongodb.net/devTinder");
};

module.exports = connectDB;