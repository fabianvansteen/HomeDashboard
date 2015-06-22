'use scrict';

exports.addRoutes = function (app, config) {

    var AppInformation = (function () {
        function AppInformation(parameters) {
            this.application = parameters.application;
            this.version = parameters.version;
        }
        return AppInformation;
    })();

    var appInformation = new AppInformation({ application: 'Home dashboard', version: '1.0.0' });
    
    /**
   * HTTP GET /api/app
   * Returns: Return the app information
   */
    app.get('/api/app', function (request, response) {
        response.status(200).json({ appInformation: appInformation });
    });
    
    /**
   * HTTP GET /api/bookmarks
   * Returns: Return the bookmarks
   */
    app.get('/api/bookmarks', function (request, response) {
        response.status(200).sendFile('bookmarks.json', { root: 'src/server/data' });
    });
};