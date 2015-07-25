'use scrict';

var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

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
		.pipe(gulp.dest('public/js'));

	// JavaScript angular app
	gulp.src(['public/app/app.js',
		'public/app/services/*.js',
		'public/app/controllers/*.js'])
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('public/js'));
							
	// Prerequisites Css
	gulp.src(['node_modules/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/metismenu/dist/metisMenu.min.css',
		'node_modules/font-awesome/css/font-awesome.min.css'])
		.pipe(concat('prerequisites.min.css'))
    	.pipe(minifyCss())
		.pipe(gulp.dest('public/css'));
		
	// Fonts
	gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
		'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
		'node_modules/font-awesome/fonts/fontawesome-webfont.woff2'])
		.pipe(gulp.dest('public/fonts'));
});