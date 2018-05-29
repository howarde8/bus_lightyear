const mongoose = require("mongoose");
const requireLogin = require('../middlewares/requireLogin');

const Company = mongoose.model('companies');

module.exports = app => {
  app.post('/api/company/add', requireLogin, (req, res) => {
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
      console.log('out', existingCompany);
      if (existingCompany) {
        console.log('exist');
        res.status(403).send({ error: 'Company exists!' });
      } else {
        console.log('not exist');
        company
          .save()
          .then(company => { res.send(company); });
      }
    });
  });
};
