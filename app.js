var express = require('express');
var config = require('./config.js');
var favicon = require('serve-favicon');

var app = express();

/*
require('./src/server/routes/app').addRoutes(app, config);
require('./src/server/routes/static').addRoutes(app, config);

require('./src/server/routes/api').addRoutes(app, config);
*/

/**
  * HTTP GET /
  * Returns: Return the index.html page
  */
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + config.server.publicFolder });
});


/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/api/version', function (request, response) {
  response.status(200).json({
    'name': 'Home Dashboard',
    'version': 1.1
  });
});

/**
  * HTTP GET /api/dashboard
  * Returns: Return the dashboard information.
  */
app.get('/api/dashboard', function (request, response) {
  response.status(200).json({
    'name': 'Home Dashboard',
    'version': 1.1
  });
});

function AppInformation(parameters) {
            this.application = parameters.application;
            this.version = parameters.version;
        }
    

    var appInformation = new AppInformation({ application: 'Home dashboard', version: '1.0.0' });
    
    /**
   * HTTP GET /api/app
   * Returns: Return the app information
   */
    app.get('/api/app', function (request, response) {
        response.status(200).json({ appInformation: appInformation });
    }); 


/**
* HTTP GET /favicon.ico
* Returns: Return the fav icon.
*/
app.use(favicon(__dirname + config.server.publicFolder + '/favicon.ico'));

app.use(express.static(__dirname + config.server.publicFolder));

var server = app.listen(config.server.listenPort, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Home dashboard app listening at http://%s:%s', host, port);

});