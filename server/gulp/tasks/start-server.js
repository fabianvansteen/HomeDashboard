var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('start-server', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});