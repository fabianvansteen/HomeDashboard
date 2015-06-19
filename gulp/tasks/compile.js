'use scrict';

var gulp = require('gulp');
var path = require('path');

gulp.task('compile', function () {
  gulp.start(['jshint', 'less']);

  var angular = path.resolve('node_modules', 'angular', 'angular.js');
  var jsDest = path.join('src', 'client', 'assets', 'js');

  gulp.src([angular])
    .pipe(gulp.dest(jsDest));
});