var gulp = require('gulp'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch'),
    gulp_watch_pug = require('gulp-watch-pug');

var styles = [
 
    'css/common.css'
];

var scripts = [
    'js/app.js'
];


/*** LESS ***/
gulp.task('less', function () {
    gulp.src('less/common.less')
        .pipe(less())
        .pipe(concatCss('common.css'))
        .pipe(gulp.dest('css/'));
});

/*** CSS ***/
gulp.task('css', ['less'], function () {
    gulp.src(styles)
        .pipe(concatCss('bundle.css'))
        .pipe(minifyCss())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('css/'));
});

/*** JS ***/
gulp.task('js', function () {
    gulp.src(scripts)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('js/'));
});

/*** JS ***/
gulp.task('pug', function () {
    gulp.src(scripts)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('js/'));
});

// gulp.task('jade', function() {
//     return gulp.src('templates/**/*.jade')
//         .pipe(jade({
//             pretty: true
//         }))
//         .pipe(gulp.dest('html/')); // указываем gulp куда положить скомпилированные HTML файлы
// });

gulp.src('templates/**/*.pug')
    .pipe(watch('templates/**/*.pug'))
    .pipe(gulp_watch_pug('templates/**/*.pug', { delay: 100 }))
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('html/'));

/*** WATCH ***/
gulp.task('watch', function () {
    gulp.watch('less/**/*.less', ['css']);
    gulp.watch(styles, ['css']);
    gulp.watch(scripts, ['js']);
});


/*** BUILD ***/
gulp.task('build', ['css', 'js']);

