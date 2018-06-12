const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  _bus: { type: Schema.Types.ObjectId, ref: "Bus" },
  prepare_day: Number,
  expire_day: Number,
  discount: [{
    date_start: Date,
    date_end: Date,
    percentage: Number
  }],
  cancel: [{
    days_ago: Number,
    percentage: Number
  }],
  price_perday_high: Number,
  price_perday_low: Number,
  service_area: [String],
  available_num: Number
});

mongoose.model("products", productSchema);
