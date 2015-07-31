/* global write */
'use strict'

/**
 * Module dependencies.
 */
var http = require('http'),
	httpProxy = require('http-proxy'),
	express = require('express'),
	VersionHandler = require('./handlers/versionHandler'),
	config = require('./config.json');

var proxyPort = config.proxy.port,
	expressPort = config.express.port,
	proxy = httpProxy.createProxyServer({}),
	app = express();

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	var handler = new VersionHandler();

	var version = handler.retrieveVersion();

	response.status(200).json(version);
});

var expressServer = app.listen(expressPort, function () {

	var host = expressServer.address().address;
	var port = expressServer.address().port;

	console.log('listening at http://%s:%s', host, port);
});

var proxyServer = http.createServer(function (req, res) {

	var target = config.routes[req.headers.host.split(':')[0]];
	
	if (!target) {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.write("404 Not Found\n");
		res.end();
		return;
	}
		
	// You can define here your custom logic to handle the request
	// and then proxy the request.
	proxy.web(req, res, { target: 'http://' + target.host + ':' + target.port });
});

console.log("listening on port " + proxyPort)
proxyServer.listen(proxyPort);