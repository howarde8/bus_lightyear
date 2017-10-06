const keys = require("./config/keys");
const express = require("express");
const path = require("path");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access Token: ',accessToken);
            console.log('refresh token: ', refreshToken);
            console.log('profile: ', profile);
        }
    )
);

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

app.get("/auth/google/callback", passport.authenticate("google"));

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
