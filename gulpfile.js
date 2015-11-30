var gulp = require('gulp'),
    sass = require('gulp-sass'),
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

gulp.task('copy', function () {
    return gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('web/css/'));
});

gulp.task('default', ['sass', 'copy']);