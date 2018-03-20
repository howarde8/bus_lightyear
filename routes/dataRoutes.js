const mongoose = require("mongoose");
const async = require("async");

var busSchema = new mongoose.Schema(
    {
        "id": String,
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
mongoose.model("bus", busSchema);

var ratingSchema = new mongoose.Schema(
    {
        "id": String,
        "type": String,
        "ref_id": String,
        "rated_user_id": String,
        "rated_user_name": String,
        "stars": Number,
        "comment": String
    },
    {collection: "rating"}
);
mongoose.model("rating", ratingSchema);

module.exports = app => {
  // for demo ==========
  const demoData = require("../demoTempData");

  app.get("/api/bus/all", (req, res) => {
    console.log("testBUS");
    res.send(demoData.bus);
  })
  // for demo end

    // app.get("/api/bus/all", (req, res) => {
    //     mongoose.model("bus").find(function(err, buses) {
    //         res.send(buses);
    //     });
    // });

    app.get("/api/bus/:id", (req, res) => {
        var id = req.params.id;
        mongoose.model("bus").findOne({'id': id}, function(err, bus) {
            res.send(bus);
        });
    });

    // find random bus
    app.get("/api/bus/random/:amount", (req, res) => {
        mongoose.model("bus").count().exec(function(err, count) {
            var amount = req.params.amount;
            if (amount > count) {
                console.log("/api/bus/random/" + amount + ": amount > count");
                res.status(400).send("amount(" + amount + ") > count(" + count +")");
            } else {
                // declare array with amount size and init its value as same as its index
                var randArr = new Array(count);
                for (var i = 0; i < count; i++) {
                    randArr[i] = i;
                }

                // shuffle the array
                for (var i = count - 1; i >= 0; i--) {
                    var random = parseInt(Math.random() * (i + 1));
                    // swap index and random number
                    var temp = randArr[i];
                    randArr[i] = randArr[random];
                    randArr[random] = temp;
                }
                randArr = randArr.slice(0, amount);

                // get all buses and respond random amount of buses
                mongoose.model("bus").find(function(err, buses) {
                    var randBuses = [];
                    for (var i = 0; i < amount; i++) {
                        randBuses.push(buses[randArr[i]]);
                    }
                    res.send(randBuses);
                });

            }
        });
    });

    app.get("/api/rating/:id", (req, res) => {
        var id = req.params.id; // ref_id
        mongoose.model("rating").find({'ref_id': id}, function(err, ratings) {
            res.send(ratings);
        });
    });

    app.get("/api/rating/average/:id", (req, res) => {
        var id = req.params.id; // ref_id
        mongoose.model("rating").find({'ref_id': id}, function(err, ratings) {
            var stars = 0;
            for (var i = 0; i < ratings.length; i++) {
                stars += ratings[i].stars;
            }
            var avg = (stars / ratings.length).toPrecision(2);
            res.send({average: parseInt(avg), amount: ratings.length});
        });
    });

};
