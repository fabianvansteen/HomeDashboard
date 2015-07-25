var assert = require("assert")
var logger = require('../utils/logger');
var fs = require('fs');

describe('Logger tests', function () {


    it('Log an error to error.logs', function () {		
		logger.init();

		logger.log('error', 'An error has occurred.')
		
		var stats = fs.lstatSync('logs/error.logs');

	    // Is it a directory?
	    if (stats.isFile()) {
			assert.ok(stats, 'Error log exists');
	    }
    });

});