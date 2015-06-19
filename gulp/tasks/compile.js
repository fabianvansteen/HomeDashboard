'use scrict';

var gulp = require('gulp');
var path = require('path');

gulp.task('compile', ['jshint', 'less', 'client-build']);