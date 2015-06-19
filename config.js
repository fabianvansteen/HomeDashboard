'use scrict';

module.exports = { 
  server: {
    listenPort: 5000,                                   // The port on which the server is to listen (means that the app is at http://localhost:3000 for instance)
    securePort: 5433,                                  // The HTTPS port on which the server is to listen (means that the app is at https://localhost:8433 for instance)
    distFolder: 'dist/client',  // The folder that contains the application files (note that the files are in a different repository) - relative to this file
    staticUrl: '/static',                               // The base url from which we serve static files (such as js, css and images)
    cookieSecret: 'angular-app'                         // The secret for encrypting the cookie
  }
};