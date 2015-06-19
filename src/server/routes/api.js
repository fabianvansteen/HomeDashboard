'use scrict';

exports.addRoutes = function (app, config) {

    var VersionInfo = (function () {
        function VersionInfo(parameters) {
            this.application = parameters.application;
            this.version = parameters.version;
        }
        return VersionInfo;
    })();

    var versionInfo = new VersionInfo({ application: 'Home dashboard', version: '1.0.0' });

    /**
    * HTTP GET /api/dashboard
    * Returns: ?
    */
    app.get('/api/dashboard', function (request, response) {
        response.json(200, { version: versionInfo });
    });
};