var authRoutes = require('./routes');

function routes(router) {
  authRoutes(router);

  router.use(function(req, res, next) {
  	res.status(404).send({message: 'Sorry couldnt find that route!'});
  });
}

module.exports = routes;