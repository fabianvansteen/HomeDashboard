'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('jshint', function () {
  gulp.src(['*.js', 'src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({
    title: 'JSHint',
    message: 'JSHint Passed!'
  }));
});