'use scrict';

var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('copy', function () {

	// Prerequisites JavaScript
	gulp.src(['node_modules/jquery/dist/jquery.min.js',
		'node_modules/angular/angular.min.js',
		'node_modules/angular-route/angular-route.min.js',
		'node_modules/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/metismenu/dist/metisMenu.min.js'])
		.pipe(uglify())
		.pipe(concat('prerequisites.min.js'))
		.pipe(gulp.dest('dist/client/assets/js'));

	// JavaScript angular app
	gulp.src(['src/client/app/app.js',
		'src/client/app/services/*.js',
		'src/client/app/controllers/*.js'])
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('dist/client/app'));	
			
	// Assets
	gulp.src(['src/client/assets/*.*'])
		.pipe(gulp.dest('dist/client/assets'));

	gulp.src(['src/client/**/*.html', 'src/client/*.ico'])
		.pipe(gulp.dest('dist/client'));	
				
	// Prerequisites Css
	gulp.src(['node_modules/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/metismenu/dist/metisMenu.min.css',
		'node_modules/font-awesome/css/font-awesome.min.css'])
		.pipe(concat('prerequisites.min.css'))
		.pipe(gulp.dest('dist/client/assets/css'));
		
	// Fonts
	gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
		'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
		'node_modules/font-awesome/fonts/fontawesome-webfont.woff2'])
		.pipe(gulp.dest('dist/client/assets/fonts'));
});