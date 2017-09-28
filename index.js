const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/text-response", (req, res) => {
    user = req.query["user"];
    resText = "Hello " + user + "!";
    res.send(resText);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
