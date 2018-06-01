const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Company = mongoose.model("companies");

module.exports = app => {
  app.get("/api/company/all", (req, res) => {
    Company.find().then(companies => {
      res.send(companies);
    });
  });

  app.get("/api/company/:id", (req, res) => {
    Company.findById(req.params.id).then(company => {
      res.send(company);
    })
  });

  app.post("/api/company/add", requireLogin, (req, res) => {
    const { name, phone, address, introduction, buses, users } = req.body;

    const company = new Company({
      name,
      phone,
      address,
      introduction,
      regDate: Date.now(),
      buses,
      users
    });

    Company.findOne({ name }).then(existingCompany => {
      if (existingCompany) {
        res.status(403).send({ error: "Company exists!" });
      } else {
        company.save().then(company => {
          res.send(company);
        });
      }
    });
  });

  app.post("/api/company/update", requireLogin, (req, res) => {
    const { id, name, phone, address, introduction, buses, users } = req.body;

    // find exist field
    var company = { name, phone, address, introduction, buses, users };
    for (key in company) {
      if (!company[key]) delete company[key];
    }

    Company.findByIdAndUpdate(id, company).then(existingCompany => {
      if (existingCompany) {
        res.send(existingCompany);
      } else {
        res.status(403).send({ error: "Company not exists!" });
      }
    });
  });

  app.post("/api/company/delete", requireLogin, (req, res) => {
    Company.findByIdAndRemove(req.body.id).then(existingCompany => {
      if (existingCompany) {
        res.send(existingCompany);
      } else {
        res.status(403).send({ error: "Company not exists!" });
      }
    });
  });
};
