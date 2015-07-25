var winston = require('winston');
var fs = require('fs');

function init()
{	
	fs.mkdir('logs');
			
	winston.add(winston.transports.File, {
		filename: 'logs/error.logs'
	});
}

function log(level, message) {
	winston.log(level, message);
}

module.exports = {
	"init": init,
	"log": log
};