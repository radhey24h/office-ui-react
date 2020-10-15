var express = require("express"),
  router = express.Router(),
  db = require("../models");

module.exports = function(app) {
  app.use("/", router);
};

router.get("/", function(req, res, next) {
  // user = req.session.user || null;
  res.render("index", {
    title: "MySite - Official",
    // user: user
  });
});

// API to return list of touch-in users.
router.get('/list/touch-in', function(req, res, next) {
  db.TouchIn.findAll()
    .then(function (users) {
      res.json(users);
    });
}); 

// API to create and update touch-in users.
router.post('/touch-in', function (req, res, next) {
  
  db.TouchIn.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {  // New object will created
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }).spread((touchObj) => {  // Object will updated here.
    touchObj.firstName = req.body.firstName;
    touchObj.lastName = req.body.lastName;
    touchObj.phone = req.body.phone;
    touchObj.message = req.body.message;
    touchObj.updatedAt = new Date();
    touchObj.save();
    res.json(touchObj);
  });
});

// API to delete touch-in users.
router.delete('/delete/touch-in', function(req, res, next) {
  db.TouchIn.destroy({
    where: {
      id: req.body.id
    }
  })
  .then(function(user) {
    res.send(user);
  });
});