console.log('Booting up');


var express,
  app,
  config;

config = require('./config/config');
// require('./config/express')(app);
// require('./handlers/request-handler.js')(app);

setInterval(function() {
  console.log('Im on a node!');
}, 3000);

var server = require('http').createServer(app);
server.listen(config.port, function(){
  console.log('listening');
});

// express = require('express');
// app = express();



// app.listen(config.port, function() {
//   console.log('Express server now listening on: ' + config.port);
// });