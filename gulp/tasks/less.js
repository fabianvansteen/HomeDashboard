'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('src/client/less/**/*.less')
    .pip(less())
    .pipe(gulp.dest('dist/client/assets/css'));
});