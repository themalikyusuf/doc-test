var User = require('../models/user');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

exports.createUser = function createUser(req, res) {
  var user = new User();
  user.username = req.body.username;

  user.save()
  .then(function(user) {
    return res.status(200).send({
      success: true,
      message: 'Welcome',
      id: user._id
    });
  })
  .catch(function(err) {
    return res.status(403).send({
      success: false,
      message: 'An error occured.',
      error: err
    });
  });
};

exports.getUsers = function getUsers(req, res) {
  User.find({})
  .then(function(users) {
    if (!users) {
      return res.status(401).send({
        success: false,
        message: 'Users not found.'
      });
    }
    else {
      return res.status(200).send(users);
    }
  })
  .catch(function(err) {
    return res.status(403).send({
      success: false,
      message: 'An error occured.',
      error: err
    });
  });
};
