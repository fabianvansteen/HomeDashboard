var winston = require('winston');

function init()
{	
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