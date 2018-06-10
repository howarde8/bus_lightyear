const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  phone: String,
  address: String,
  introduction: String,
  reg_date: Date,
  buses: [{ type: Schema.Types.ObjectId, ref: "Bus" }],
  users: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

mongoose.model("companies", companySchema);
