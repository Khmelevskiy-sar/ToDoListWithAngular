(function () {
  'use strict';

  var gulp = require('gulp');

  var paths = gulp.paths;

  var $ = require('gulp-load-plugins')();

  var wiredep = require('wiredep').stream;

  gulp.task('inject', ['styles'], function () { //, 'eslint'

    var injectStyles = gulp.src([
      paths.tmp + '/serve/{app,components}/**/*.css',
      '!' + paths.tmp + '/serve/app/vendor.css'
    ], {
      read: false
    });

    var injectScripts = gulp.src([
      paths.src + '/app/app.js',
      paths.src + '/app/config.js',

      paths.src + '/app/common/**/*.js',

      paths.src + '/{app,components}/**/*.js',
      '!' + paths.src + '/{app,components}/**/*.spec.js',
      '!' + paths.src + '/app/**/testHelpers/*.js'
    ]).pipe($.angularFilesort());

    var injectOptions = {
      ignorePath: [paths.src, paths.tmp + '/serve'],
      addRootSlash: false
    };

    var wiredepOptions = {
      directory: 'bower_components',
      exclude: [/bootstrap-sass-official/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
    };

    return gulp.src(paths.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(wiredepOptions))
      .pipe(gulp.dest(paths.tmp + '/serve'));

  });
}());
