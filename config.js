module.exports = {
  "server": {
    
    // The HTTP port on which the server is to listen
    "listenPort": 5000,
    
    // The HTTPS port on which the server is to listen
    "securePort": 5433,   
                               
    // The folder that contains the application files (note that the files are in a different repository) - relative to this file
    "publicFolder": '/public', 
                  
    // The base url from which we serve static files (such as js, css and images)
    "staticUrl": '/static'
  }
};