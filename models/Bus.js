const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const busSchema = new Schema(
    {
        "name": String,
        "company_name": String,
        "company_id": String,
        "category": String,
        "img_src": String,
        "description": {
            "max_amount": Number,
            "start_time": String,
            "end_time": String,
            "introduction": String,
            "precaution": Array,
            "subscription": String,
            "subscription_cancel": String
        },
        "entertainment": Array,
        "safety_facility": Array,
        "order": {
            "availability": Boolean,
            "price": Number,
            "discount": Number
        }
    },
    {collection: "bus"}
);

mongoose.model("buses", busSchema);
