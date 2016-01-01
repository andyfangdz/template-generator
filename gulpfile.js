var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var webpackStream = require('webpack-stream');
var named = require('vinyl-named');


var webpackConfig = require('./webpack.config.js');


gulp.task("default", function () {
  return gulp.src("./index.js")
    .pipe(webpackStream(webpackConfig))
    .pipe(concat('template-generator.js'))
    .pipe(gulp.dest("dist"));
});