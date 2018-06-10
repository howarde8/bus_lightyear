const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  _product: { type: Schema.Types.ObjectId, ref: "Product" },
  date: [{
    date_start: Date,
    date_end: Date
  }],
  money: Number,
  status: String,
  pickup_address: String,
  schedule: String
});

mongoose.model("bookings", bookingSchema);
