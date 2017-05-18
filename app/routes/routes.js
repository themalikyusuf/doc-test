var authCtrl = require('../controllers/auth.controller');

function authRoutes(router) {
  router.route('/createUser')
    .post(authCtrl.createUser)
    .get(authCtrl.getUsers);
}

module.exports = authRoutes;