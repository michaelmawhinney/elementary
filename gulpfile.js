//gulp
var gulp          = require('gulp');

// common
var runsequence   = require('run-sequence');
var del           = require('del');
var rename        = require('gulp-rename');
var fs            = require('fs');

// scss
var sasslint      = require('gulp-sass-lint');
var header        = require('gulp-header');

// css
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var csscomb       = require('gulp-csscomb');  
var cssclean      = require('gulp-clean-css');
var csslint       = require('gulp-csslint');

gulp.task('lint-sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sasslint());
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
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('cssclean', function(){
  return gulp.src('dist/elementary.css')
    .pipe(cssclean())
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

gulp.task('css',function(callback){
  runsequence('clean','sass','lint-css','cssclean','banner',callback);
});

gulp.task('test',function(callback){
  runsequence('lint-sass','css',callback);
});
