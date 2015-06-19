var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('src/client/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest(path.join('dist', 'client', 'assets', 'css')));
});