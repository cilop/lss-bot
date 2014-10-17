module.exports = function(app) {
  var bodyParser;

  bodyParser = require('body-parser');

  app.use(bodyParser());

};