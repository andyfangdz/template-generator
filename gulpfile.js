var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var webpackStream = require('webpack-stream');
var named = require('vinyl-named');
var webpack = require("webpack");


var webpackConfig = require('./webpack.config.js');

if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}


gulp.task("default", function() {
  return gulp.src("./index.js")
    .pipe(webpackStream(webpackConfig))
    .pipe(concat('template-generator.js'))
    .pipe(gulp.dest("dist"));
});

gulp.task("build", function() {
  var myConfig = Object.assign({}, webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );
  return gulp.src("./index.js")
    .pipe(webpackStream(myConfig))
    .pipe(concat('template-generator.js'))
    .pipe(gulp.dest("dist"));
})
