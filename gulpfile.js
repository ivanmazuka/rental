// Modules
const gulp = require('gulp');
const minify = require('gulp-minify');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

// Watch
gulp.task('watch', function () {
  gulp.watch(
    ['src/style.sass', 'src/index.js'],
    ['sass', 'js']
  );
});

// JavaScript
gulp.task('js', function () {
  return gulp.src('src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

// Styles
gulp.task('sass', function () {
  return gulp.src('src/style.sass')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('imgs', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Default task
gulp.task('default', ['js', 'sass', 'imgs']);
