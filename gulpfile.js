// МОДУЛИ
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    rename = require('gulp-rename'),
    del = require('del'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglifyjs');


// АВТОМАТИЧЕСКОЕ СОХРАНЕНИЕ
gulp.task('watch', function () {
    gulp.watch(['application/style/style.sass', 'application/js/script.js'],
                ['sass', 'js']);
});


// ДЛЯ JS
gulp.task('js', function () {
    return gulp.src('application/js/script.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('application/js'));
});


// ДЛЯ СТИЛЕЙ
gulp.task('sass', function () {
    return gulp.src('application/style/style.sass')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('application/style'));
});


// ОЧИСТКА
gulp.task('clean', function () {
    return del.sync('build');
});


// СБОРКА
gulp.task('build', ['clean', 'js', 'sass'], function () {
    var js = gulp.src('application/js/script.min.js')
        .pipe(gulp.dest('build/js'));
    var libs = gulp.src('application/libs/jquery-3.1.0.min.js')
        .pipe(gulp.dest('build/libs'));
    var php = gulp.src('application/php/**/*')
        .pipe(gulp.dest('build/php'));
    var css = gulp.src('application/style/style.min.css')
        .pipe(gulp.dest('build/style'));
    var images = gulp.src('application/images/**/*')
        .pipe(gulp.dest('build/images'));
    var html = gulp.src('application/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});
