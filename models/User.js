const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema({
  google_id: String,
  name: String,
  phone: String,
  email: String,
  address: String,
  gender: String,
  birthday: Date,
  career: String,
  img_src: String
});

mongoose.model("users", userSchema);
