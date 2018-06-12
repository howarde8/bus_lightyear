const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Comment = mongoose.model("comments");

module.exports = app => {
  app.get("/api/comment/:id", (req, res) => {
    Comment.findById(req.params.id).then(existingComment => {
      if (existingComment) {
        res.send(existingComment);
      } else {
        res.status(404).send("Comment not found!");
      }
    });
  });

  app.get("/api/comment/booking/:id", (req, res) => {
    Comment.find({ _booking: req.params.id }).then(existingComments => {
      if (existingComments.length != 0) {
        res.send(existingComments);
      } else {
        res.status(404).send("No comments found by the given booking");
      }
    });
  });

  app.post("/api/comment/add", requireLogin, (req, res) => {
    const { _booking, content, rating } = req.body;

    if (!_booking) {
      res.status(403).send({ error: "Booking ID must be provided!" });
      return;
    }

    const comment = new Comment({ _booking, content, rating });

    // does not need to check if duplicate
    comment.save().then(comment => {
      res.send();
    });
  });

  app.post("/api/comment/update/:id", requireLogin, (req, res) => {
    const { _booking, content, rating } = req.body;

    // find exist field
    var comment = { _booking, content, rating };
    for (key in comment) {
      if (!comment[key]) delete comment[key];
    }

    Comment.findByIdAndUpdate(req.params.id, comment).then(existingComment => {
      if (existingComment) {
        res.send();
      } else {
        res.status(403).send({ error: "Comment not exists!" });
      }
    });
  });

  app.post("/api/comment/delete/:id", requireLogin, (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(existingComment => {
      if (existingComment) {
        res.send();
      } else {
        res.status(403).send({ error: "Comment not exists!" });
      }
    });
  });
};
