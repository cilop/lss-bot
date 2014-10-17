var express,
  app,
  config;

setInterval(function() {
  console.log('Im on a node!');
}, 3000);

express = require('express');
app = express();

config = require('./config/config');
require('./config/express')(app);
require('./handlers/request-handler.js')(app);

app.listen(config.port, function() {
  console.log('Express server now listening on: ' + config.port);
});