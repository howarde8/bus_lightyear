const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");
require("./routes/authRoutes")(app);

// mongodb relatives
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);

// define data
var homepageJson = {
    startCity: ["基隆市", "台北市", "新北市"],
    endCity: ["桃園市", "新竹市"]
};

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/homepage-info", (req, res) => {
    res.send(homepageJson);
});

app.get("/search-bus-by-city", (req, res) => {
    startCityIndex = req.query["startCityIndex"];
    endCityIndex = req.query["endCityIndex"];
    res.send(
        homepageJson.startCity[startCityIndex] +
            "往" +
            homepageJson.endCity[endCityIndex] +
            "的客運公司"
    );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
