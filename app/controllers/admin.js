var express = require('express'),
    router = express.Router(),
    db = require('../models');

module.exports = function(app) {
  app.use('/admin', router);
};

router.get('/', function(req, res, next) {
    db.User.findAll({
        include: [{
            model: db.UserProfile
        }]
    }).then(function(users){
        res.json(users);
    });
});

router.post('/save-currency', function(req, res, next) {

    db.UserProfile.findOrCreate({
        where: {
            user_id: req.body.userId
        },
        defaults:{
            user_id: req.body.userId,
            calculator_currency_id: req.body.currencyId,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }).spread(function(objUser){
        objUser.calculator_currency_id = req.body.currencyId;
        objUser.updatedAt = new Date();
        objUser.save();
        res.json(objUser);
    });

});

router.get('/company-users', function(req, res, next) {

    db.User.findAll({
        attributes: ["id", "username", "firstName", "isSuperuser"],
        include: [{
                model: db.UserProfile
            }, {
                model: db.Group,
                where: {
                    id: {
                        $in: [1, 2, 3]
                    }
                }
            }]
    }).then(function(users){
        res.json(users);
    });
});










