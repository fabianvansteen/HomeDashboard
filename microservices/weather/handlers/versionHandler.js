'use scrict'

/**
 * Module dependencies.
 */
var pjson = require('../package.json');

function retrieveVersion()
{
	return {
		'name': pjson.name,
		'version': pjson.version,
		'description': pjson.description,
		'author': pjson.author,
		'license': pjson.license
	};
}

function VersionHandler()
{
	this.retrieveVersion = retrieveVersion;
}

module.exports = VersionHandler;