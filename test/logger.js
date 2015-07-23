var assert = require("assert")
var logger = require('../utils/logger');

describe('Logger tests', function () {

    it('Logger blah', function () {
		logger.init();

		logger.log('error', 'An error has occurred.')
    });

});