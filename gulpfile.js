var gulp = require('gulp');
var jshint = require('gulp-jshint');
var htmlmin = require('gulp-htmlmin');
var spawn = require('child_process').spawn;

gulp.task('default', function() {
  console.log('Usage:');
  console.log('gulp solarem-docker # builds the whole thing');
});

gulp.task('clean', function() {
    return del(['solarem']);
});

gulp.task('docker-source', function() {
    return gulp.src('docker/*').pipe(gulp.dest('solarem/docker'))
});

gulp.task('modbus-rtu', function() {
    return gulp.src('node-red-contrib-modbus-rtu/*.tgz').pipe(gulp.dest('solarem/docker'))
});

gulp.task('epr04', function() {
    return gulp.src('Meter-EPR04/*.tgz').pipe(gulp.dest('solarem/docker'))
});

gulp.task('node-red', function() {
    return gulp.src('node-red/*').pipe(gulp.dest('solarem/docker'))
});

gulp.task('docker', ['docker-source', 'node-red', 'modbus-rtu', 'epr04'], function(done) {
   var proc =  spawn('docker', ['build', '-t', 'sofkaski/solarem:1.0', 'solarem/docker'], {stdio: 'inherit'});

   proc.on("close", function(exitCode) {
       console.log('Process finished with code ' + exitCode);
       done(exitCode);
   });
});




