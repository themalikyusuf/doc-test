var express        = require('express');
var app            = express();
var router = express.Router();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./app/routes/');

var db = require('./config/db');

var port = process.env.PORT || 3000;
routes(router);

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

app.use('/api', router);

app.get('*', function(req, res) {
  res.sendfile(__dirname+ '/public/index.html');
});

app.listen(port);	
console.log('Magic happens on port ' + port);
exports = module.exports = app;