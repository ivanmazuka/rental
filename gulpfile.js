// Modules
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');

// Watch
gulp.task('watch', function () {
  gulp.watch(
    ['application/style/style.sass', 'application/js/index.js'],
    ['sass', 'js']
  );
});

// JavaScript
gulp.task('js', function () {
  return gulp.src('js/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

// Styles
gulp.task('sass', function () {
  return gulp.src('style/style.sass')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'));
});

// HTML
gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

// PHP
gulp.task('php', function () {
  return gulp.src('php/**/*')
    .pipe(gulp.dest('dist/php'));
});

// Images
gulp.task('imgs', function () {
  return gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Default task
gulp.task('default', ['js', 'sass', 'html', 'php']);
