var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    bower = require('gulp-bower'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps');

// app src
var src = {
    css: {
        from: [
            './assets/css/*.css',
            './assets/scss/*.scss'
        ],
        to: './style'
    },
    js: {
        from: './assets/coffee/*.coffee',
        to: './js'
    }
};

var cfg = {
    baseTasks: ['bower', 'scripts', 'styles' ]
};

gulp.task('scripts', [], function () {
    return gulp.src(src.js.from)
        .pipe(sourcemaps.init())
        .pipe(coffee({bare: true}))
        .pipe(concat('common.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(src.js.to));
});

gulp.task('styles', function () {
    return gulp.src(src.css.from)
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(concat('common.min.css'))
        .pipe(gulp.dest(src.css.to));
});


//Restore all bower packages
gulp.task('bower', function () {
    return bower();
});

gulp.task('default', cfg.baseTasks);

gulp.task('watch', cfg.baseTasks, function () {
    gulp.watch(src.css.from, ['default']);
    gulp.watch(src.js.from, ['default']);
});

