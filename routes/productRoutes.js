const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Product = mongoose.model("products");

module.exports = app => {
  app.get("/api/product/all", (req, res) => {
    Product.find().then(products => {
      res.send(products);
    });
  });

  app.get("/api/product/:id", (req, res) => {
    Product.findById(req.params.id).then(existingProduct => {
      if (existingProduct)  {
        res.send(existingProduct);
      } else {
        res.status(404).send("Product not found!");
      }
    })
  });

  app.post("/api/product/add", requireLogin, (req, res) => {
    const { name, _bus, prepare_day, expire_day,
      discount, cancel, users, price_perday_high, price_perday_low,
      service_area, available_num } = req.body;

    if (!_bus) {
      res.status(403).send({ error: "Bus ID must be provided!" });
      return;
    }

    const product = new Product({
      name, _bus, prepare_day, expire_day, discount, cancel, users, price_perday_high, price_perday_low, service_area, available_num
    });

    // does not need to check if duplicate
    product.save().then(product => {
      res.send();
    });
  });

  app.post("/api/product/update/:id", requireLogin, (req, res) => {
    const { name, _bus, prepare_day, expire_day,
      discount, cancel, users, price_perday_high,price_perday_low,
      service_area, available_num } = req.body;

    // find exist field
    var product = {
      name, _bus, prepare_day, expire_day, discount, cancel, users, price_perday_high, price_perday_low, service_area, available_num
    };
    for (key in product) {
      if (!product[key]) delete product[key];
    }

    Product.findByIdAndUpdate(req.params.id, product).then(existingProduct => {
      if (existingProduct) {
        res.send();
      } else {
        res.status(403).send({ error: "Product not exists!" });
      }
    });
  });

  app.post("/api/product/delete/:id", requireLogin, (req, res) => {
    Product.findByIdAndRemove(req.params.id).then(existingProduct => {
      if (existingProduct) {
        res.send();
      } else {
        res.status(403).send({ error: "Product not exists!" });
      }
    });
  });
};
