'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('less', function () {
  return gulp.src('public/less/**/*.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(concat('site.min.css'))
    .pipe(gulp.dest('public/css/'));
});