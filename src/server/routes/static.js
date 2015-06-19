'use scrict';

var express = require('express');

exports.addRoutes = function (app, config) {
    
  // JavaScript
  app.use(config.server.staticUrl, express.static(config.server.distFolder + '/assets/'));

  // JavaScript
  app.use('/app', express.static(config.server.distFolder + '/app/'));

  app.use(config.server.staticUrl, function (req, res, next) {
    res.send(404); // If we get here then the request for a static file is invalid
  });
};