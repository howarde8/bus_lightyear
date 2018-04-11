const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const cors = require("cors");
require("./models/User");
require("./services/passport");

app.use(cors());

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
// app.use(express.static('html'));

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('bus-react/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'bus-react', 'build', 'index.html'));
  });
}

// mongodb relatives
// mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
