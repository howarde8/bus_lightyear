const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    gender: String,
    birthday: Date,
    career: String,
    imgSrc: String
});

mongoose.model("users", userSchema);
