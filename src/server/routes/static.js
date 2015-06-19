'use scrict';

exports.addRoutes = function (app, config) {
  
  // Serve up the favicon
  app.use(config.server.staticUrl + '/site.css', function (req, res, next) {
    res.sendfile('site.css', { root: config.server.distFolder + '/less' });
  });

  app.use(config.server.staticUrl, function (req, res, next) {
    res.send(404); // If we get here then the request for a static file is invalid
  });
};