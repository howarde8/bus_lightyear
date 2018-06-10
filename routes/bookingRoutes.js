const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Booking = mongoose.model("bookings");

module.exports = app => {
  app.get("/api/booking/:id", (req, res) => {
    Booking.findById(req.params.id).then(existingBooking => {
      if (existingBooking) {
        res.send(existingBooking);
      } else {
        res.status(404).send("Booking not found!");
      }
    });
  });

  app.get("/api/booking/user/:id", (req, res) => {
    Booking.find({ _user: req.params.id }).then(existingBookings => {
      if (existingBookings.length != 0) {
        res.send(existingBookings);
      } else {
        res.status(404).send("No bookings found by the given user");
      }
    });
  });

  app.post("/api/booking/add", requireLogin, (req, res) => {
    const { _user, _product, date, money, status,
      pickup_address, schedule } = req.body;

    if (!_user || !_product) {
      res.status(403).send({ error: "User, Product ID must be provided!" });
      return;
    }

    const booking = new Booking({
      _user, _product, date, money, status, pickup_address, schedule
    });

    // does not need to check if duplicate
    booking.save().then(booking => {
      res.send();
    });
  });

  app.post("/api/booking/update/:id", requireLogin, (req, res) => {
    const { _user, _product, date, money, status,
      pickup_address, schedule } = req.body;

    // find exist field
    var booking = {
      _user, _product, date, money, status, pickup_address, schedule
    };
    for (key in booking) {
      if (!booking[key]) delete booking[key];
    }

    Booking.findByIdAndUpdate(req.params.id, booking).then(existingBooking => {
      if (existingBooking) {
        res.send();
      } else {
        res.status(403).send({ error: "Booking not exists!" });
      }
    });
  });

  app.post("/api/booking/delete/:id", requireLogin, (req, res) => {
    Booking.findByIdAndRemove(req.params.id).then(existingBooking => {
      if (existingBooking) {
        res.send();
      } else {
        res.status(403).send({ error: "Booking not exists!" });
      }
    });
  });
};
