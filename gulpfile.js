require('es6-shim');

//gulp
var gulp          = require('gulp');

// common
var runsequence   = require('run-sequence');
var del           = require('del');
var rename        = require('gulp-rename');

// css
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var csscomb       = require('gulp-csscomb');  
var cssmin        = require('gulp-cssmin');

gulp.task('sass', function(){
  return gulp.src('scss/elementary.scss')
    .pipe(sass({precision:8}))
    .pipe(autoprefixer({
      browsers: ['last 5 firefox versions','last 5 chrome versions']
    }))
    .pipe(csscomb({
    "remove-empty-rulesets": true,
    "always-semicolon": true,
    "color-case": "lower",
    "block-indent": "  ",
    "color-shorthand": true,
    "element-case": "lower",
    "eof-newline": false,
    "leading-zero": false,
    "sort-order-fallback": "abc",
    "space-before-colon": "",
    "space-after-colon": " ",
    "space-before-combinator": " ",
    "space-after-combinator": " ",
    "space-between-declarations": "\n",
    "space-before-opening-brace": " ",
    "space-after-opening-brace": "\n",
    "space-after-selector-delimiter": "\n",
    "space-before-selector-delimiter": "",
    "space-before-closing-brace": "\n",
    "strip-spaces": true,
    "tab-size": true,
    "unitless-zero": true,
    "vendor-prefix-align": true
}))
    .pipe(gulp.dest('dist'))
});

gulp.task('cssmin', function(){
  return gulp.src('dist/elementary.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
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
  runsequence('clean','sass','cssmin',callback);
});

