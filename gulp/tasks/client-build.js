'use scrict';

var gulp = require('gulp');
var path = require('path');

gulp.task('client-build', ['clean'], function () {

	console.log('Client build action');

	gulp.src(['src/client/app/**/*.js'])
		.pipe(gulp.dest('dist/client/app'));

	gulp.src(['src/client/**/*.html', 'src/client/*.ico'])
		.pipe(gulp.dest('dist/client'));
});


var clean = require('gulp-clean');

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read:false})
  .pipe(clean());
});
