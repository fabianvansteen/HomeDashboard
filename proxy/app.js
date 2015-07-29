var http = require('http');
var httpProxy = require('http-proxy');

var port = 8080;

var proxy = httpProxy.createProxyServer({});

var addresses = {
	'dashboard.home.dev:8080': {
		host: 'localhost',
		port: 20000
	},
	'weather.home.dev:8080': {
		host: 'localhost',
		port: 20010
	},
	'temperature.home.dev:8080': {
		host: 'localhost',
		port: 20011
	},
	'calendar.home.dev:8080': {
		host: 'localhost',
		port: 20012
	}
};

var server = http.createServer(function (req, res) {

	var target = (addresses[req.headers.host]) ? addresses[req.headers.host] : addresses.default;
		
	// You can define here your custom logic to handle the request
	// and then proxy the request.
	proxy.web(req, res, { target: 'http://' + target.host + ':' + target.port });
});

console.log("listening on port " + port)
server.listen(port);