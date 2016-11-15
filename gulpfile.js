'use strict';

var gulp = require('gulp');
var sass = require ('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create('server');

gulp.task('browserSync', function(){
	browserSync.init({
		host: 'americollectpay.loc',
		open: 'external',
		proxy: 'http://americollectpay.loc/',
		ghostMode: false
	});
});

gulp.task('sass', function() {
	return gulp
		.src('scss/**/*.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: ['bower_components']
		}))
		.pipe(autoprefixer({
			browsers: ['last 5 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('Live/Files/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('Live/**/*.html', browserSync.reload);
	gulp.watch('mock/**/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
