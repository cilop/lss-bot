var sendResponse,
  handlers;

sendResponse = function(req, res, code) {
  res.send(code);
};

handlers = require('./handler-callbacks');

module.exports = function(app) {

  // app.post('/lssbot/incoming', handlers.incoming);
  app.post('/*', handlers.incoming);


};