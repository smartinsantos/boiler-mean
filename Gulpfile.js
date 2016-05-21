var gulp    = require('gulp');
var sync    = require('run-sequence');
var webpack = require('webpack-stream');
var todo    = require('gulp-todoist');
var path    = require('path');
var nodemon = require('gulp-nodemon');

/*
map of paths for using with the tasks below
 */
var paths = {
  entry: 'client/app.js',
  app: ['client/**/*.{js,styl,html}', 'client/styles/**/*.styl'],
  js: 'client/**/*!(.spec.js).js',
  toCopy: ['client/index.html'],
  html: ['client/index.html'],
  dest: 'dist',
};


gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build', ['todo'], function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

/*
simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));
});


gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: './server/app.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});

/*
task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build']);
  gulp.watch(paths.toCopy, ['copy']);
});


gulp.task('default', function(done) {
  sync('build', 'copy','nodemon','watch', done)
});

