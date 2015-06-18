var gulp = require('gulp');

gulp.task('run', function (cb) {
  gulp.start(['start-server', 'open-chrome']);
});