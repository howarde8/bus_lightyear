const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");


// cookie session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // should be microsecond
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// mongodb relatives
mongoose.connect(keys.mongoURI);

// define data
var homepageJson = {
    startCity: ["基隆市", "台北市", "新北市"],
    endCity: ["桃園市", "新竹市"]
};

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/index.html"));
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
