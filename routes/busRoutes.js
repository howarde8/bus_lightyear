const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Bus = mongoose.model("buses");

module.exports = app => {
  app.get("/api/bus/all", (req, res) => {
    Bus.find().then(buses => {
      res.send(buses);
    })
  });

  app.get("/api/bus/:id", (req, res) => {
    Bus.findById(req.params.id).then(existingBus => {
      if (existingBus) {
        res.send(existingBus);
      } else {
        res.status(404).send("Bus not found!");
      }
    });
  });

  app.post("/api/bus/add", requireLogin, (req, res) => {
    const { name, _company, category, brand, img_src, reg_date,
      safe_facilities, entertainments, max_amount, introduction,
      precaution, approval, publish_date, quantity } = req.body;

    const bus = new Bus({
      name, _company, category, brand, img_src, reg_date, safe_facilities,
      entertainments, max_amount, introduction, precaution, approval,
      publish_date, quantity
    });

    // does not need to check if duplicate
    bus.save().then(query => {
      res.send();
    });

  });

  app.post("/api/bus/update/:id", requireLogin, (req, res) => {
    const { name, _company, category, brand, img_src, reg_date,
      safe_facilities, entertainments, max_amount, introduction,
      precaution, approval, publish_date, quantity } = req.body;

    // find exist field
    var bus = {
      name, _company, category, brand, img_src, reg_date, safe_facilities,
      entertainments, max_amount, introduction, precaution, approval,
      publish_date, quantity
    };
    for (key in bus) {
      if (!bus[key]) delete bus[key];
    }

    Bus.findByIdAndUpdate(req.params.id, bus).then(existingBus => {
      if (existingBus) {
        res.send();
      } else {
        res.status(403).send({ error: "Bus not exists!" });
      }
    });
  });

  app.post("/api/bus/delete/:id", requireLogin, (req, res) => {
    Bus.findByIdAndRemove(req.params.id).then(existingBus => {
      if (existingBus) {
        res.send();
      } else {
        res.status(403).send({ error: "Bus not exists!" });
      }
    });
  });

};
