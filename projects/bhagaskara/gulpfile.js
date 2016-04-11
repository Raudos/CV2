var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');


gulp.task('css', function(){
 return gulp.src('./css/app.css')
 .pipe(autoprefixer('last 2 versions'))
 .pipe(rename({extname: '.pref.css'}))
 .pipe(gulp.dest('css/'))
 .pipe(cleanCSS({compatibility: 'ie8'}))
 .pipe(rename({extname: '.min.css'}))
 .pipe(gulp.dest('css/'))
 .pipe(gzip())
 .pipe(gulp.dest('css/'));
});

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('js/'));
});
