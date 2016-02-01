require('es6-shim');

//gulp
var gulp          = require('gulp');

// common
var runsequence   = require('run-sequence');
var del           = require('del');
var rename        = require('gulp-rename');
//var plumber       = require('gulp-plumber');

// css
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var csscomb       = require('gulp-csscomb');  
var cssmin        = require('gulp-cssmin');

gulp.task('sass', function(){
  return gulp.src('scss/ico.scss')
//    .pipe(plumber())
    .pipe(sass({precision:8}))
    .pipe(autoprefixer({
      browsers: ['last 5 firefox versions','last 5 chrome versions']
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('dist'))
});

gulp.task('cssmin', function(){
  return gulp.src('dist/ico.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {  
  return del(['dist/css']);
});

gulp.task('watch',['sass'],function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
});

gulp.task('default',function(callback){
  runsequence('css',callback);
});

gulp.task('css',function(callback){
  runsequence('clean','sass','cssmin',callback);
});
