var gulp = require('gulp');
var jshint = require('gulp-jshint');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('docker-source', function() {
    return gulp.src('docker/*').pipe(gulp.dest('solarem/docker'))
});

gulp.task('node-red', function() {
    return gulp.src('node-red/*').pipe(gulp.dest('solarem/docker'))
});

gulp.task('docker', ['docker-source', 'node-red']);


