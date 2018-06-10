const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _booking: { type: Schema.Types.ObjectId, ref: "Booking" },
  content: String,
  rating: Number
});

mongoose.model("comments", commentSchema);
