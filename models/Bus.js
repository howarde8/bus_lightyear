const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const busSchema = new Schema({
  name: String,
  _company: { type: Schema.Types.ObjectId, ref: "Company" },
  category: String,
  brand: String,
  img_src: String,
  reg_date: Date,
  safe_facilities: [String],
  entertainments: [String],
  max_amount: Number,
  introduction: String,
  precaution: String,
  approval: Boolean,
  publish_date: Date,
  quantity: Number
});

mongoose.model("buses", busSchema);
