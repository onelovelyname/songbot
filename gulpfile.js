var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {

  HTML: 'client/index.html',
  ALL: ['client/js/*.js', 'client/js/**/*.js', 'client/index.html'],
  JS: ['client/js/*.js', 'client/js/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_JS: 'dist/js',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'

};

gulp.task('transform', function() {
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('copy', function() {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('build', function() {
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify())
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function() {
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));

});

gulp.task('watch', function() {
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);
gulp.task('production', ['build','replaceHTML']);
