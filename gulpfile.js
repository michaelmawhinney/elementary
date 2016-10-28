require('es6-shim');

//gulp
var gulp          = require('gulp');

// common
var runsequence   = require('run-sequence');
var del           = require('del');
var rename        = require('gulp-rename');
var fs            = require('fs');

// scss
var scsslint      = require('gulp-scss-lint');
var header        = require('gulp-header');

// css
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var csscomb       = require('gulp-csscomb');  
var cssmin        = require('gulp-cssmin');
var csslint       = require('gulp-csslint');

gulp.task('lint-sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(scsslint());
});

gulp.task('sass', function(){
  return gulp.src('scss/elementary.scss')
    .pipe(sass({precision:3}))
    .pipe(autoprefixer({
      browsers: ['last 2 firefox versions','last 2 chrome versions']
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('dist'))
});

gulp.task('lint-css', function(){
  return gulp.src('dist/elementary.css')
    .pipe(csslint({
      'box-model': false,
      'box-sizing': false
    }))
    .pipe(csslint.reporter());
});

gulp.task('cssmin', function(){
  return gulp.src('dist/elementary.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('banner', function(){
  gulp.src('dist/elementary.css')
    .pipe(header(fs.readFileSync('banner.txt','utf8'),{}))
    .pipe(gulp.dest('dist'));
  gulp.src('dist/elementary.min.css')
    .pipe(header(fs.readFileSync('banner.txt','utf8'),{}))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {  
  return del(['dist']);
});

gulp.task('watch',['sass'],function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
});

gulp.task('default',function(callback){
  runsequence('css',callback);
});

//gulp.task('css',function(callback){
//  runsequence('clean','sass','lint','min',callback);
//});

gulp.task('css',function(callback){
  runsequence('clean','sass','lint-css','cssmin','banner',callback);
});
