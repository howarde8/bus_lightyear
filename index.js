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
require("./routes/dataRoutes")(app);
app.use(express.static('html'));

// mongodb relatives
mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
