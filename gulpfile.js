var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jquery = require('gulp-jquery'),
    autoprefixer = require('gulp-autoprefixer');

// sass
gulp.task('sass', function () {
    return gulp.src('web/css/common.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 10'],
            cascade: false
        }))
        .pipe(gulp.dest('web/css/'));
});

//copy
gulp.task('normilize.css', function () {
    return gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('web/css/'));
});
gulp.task('animate.css', function () {
    return gulp.src('node_modules/animate.css/animate.min.css')
        .pipe(gulp.dest('web/css/'));
});

//jquery build
gulp.task('jquery', function () {
    return jquery.src({
            release: 2, //jQuery 2
            flags: ['-deprecated', '-event/alias', '-ajax/jsonp']
        })
        .pipe(gulp.dest('web/js/'));
});

gulp.task('default', ['sass', 'normilize.css', 'animate.css', 'jquery']);