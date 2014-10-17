var handlers,
  sendResponse;

sendResponse = function(req, res, code) {
  // res.send(code);
  res.status(code).end();
};

handlers = {

  incoming: function(req, res) {
    res.set('Content-Type', 'application/json');
    console.log('Incoming request to /lssbot/incoming! ');
    console.log(req.body);
    sendResponse(req, res, 200);
  }

};

module.exports = handlers;