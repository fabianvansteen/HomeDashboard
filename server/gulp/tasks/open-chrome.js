var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('open-chrome', function () {
  var options = {
    url: 'http://localhost:8080',
    app: 'google chrome'
  };
  gulp.src('./index.html')
    .pipe(open('', options));
});