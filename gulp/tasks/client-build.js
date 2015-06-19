'use scrict';

var gulp = require('gulp');
var path = require('path');

gulp.task('client-build', function () {

	// Javascript
	gulp.src(['node_modules/jquery/dist/jquery.min.js',
		'node_modules/angular/angular.min.js',
		'node_modules/angular-route/angular-route.min.js',
		'node_modules/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/metismenu/dist/metisMenu.min.js'])
		.pipe(gulp.dest('dist/client/assets/js'));

	gulp.src(['src/client/app/**/*.js'])
		.pipe(gulp.dest('dist/client/app'));
		
	// Assets	
	gulp.src(['src/client/assets/*.*'])
		.pipe(gulp.dest('dist/client/assets'));

	gulp.src(['src/client/**/*.html', 'src/client/*.ico'])
		.pipe(gulp.dest('dist/client'));	
				
	// Css
	gulp.src(['node_modules/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/metismenu/dist/metisMenu.min.css',
		'node_modules/font-awesome/css/font-awesome.min.css'])
		.pipe(gulp.dest('dist/client/assets/css'));
});