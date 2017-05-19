var authCtrl = require('../controllers/auth.controller');

function authRoutes(router) {
  router.route('/users')
    .post(authCtrl.createUser)
    .get(authCtrl.getUsers);
}

module.exports = authRoutes;