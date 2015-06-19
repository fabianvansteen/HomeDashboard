'use scrict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    tasks: ['compile']
  })
    .on('restart', function () {
    console.log('restarted!');
  });
});