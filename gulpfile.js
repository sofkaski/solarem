/*eslint no-console: ["error", { allow: ["log"] }] */
const gulp = require('gulp');
const hub = require('gulp-hub');
const spawn = require('child_process').spawn;
const del = require('del');

gulp.task('default', function() {
    console.log('Usage:');
    console.log('gulp docker # builds the whole thing');
});

gulp.task('clean', function() {
    return del(['solarem']);
});

gulp.task('publish', function() {
    console.log('Gulping publish');
});

gulp.task('docker-source-rpi', function() {
    return gulp.src('docker-rpi/*').pipe(gulp.dest('solarem/docker'));
});

gulp.task('docker-source', function() {
    return gulp.src('docker/*').pipe(gulp.dest('solarem/docker'));
});

gulp.task('modbus-rtu', function() {
    return gulp.src('node-red-contrib-modbus-rtu/*.tgz').pipe(gulp.dest('solarem/docker'));
});

gulp.task('epr04', function() {
    return gulp.src('Meter-EPR04/*.tgz').pipe(gulp.dest('solarem/docker'));
});

gulp.task('power-limit-node', function() {
    return gulp.src('power-limit-node/*.tgz').pipe(gulp.dest('solarem/docker'));
});

gulp.task('node-red', function() {
    return gulp.src('node-red/*').pipe(gulp.dest('solarem/docker'));
});

gulp.task('flows', function() {
    return gulp.src('solarem-flows.json').pipe(gulp.dest('solarem/docker'));
});

gulp.task('settings', function() {
    return gulp.src('settings.js').pipe(gulp.dest('solarem/docker'));
});

gulp.task('solarem', ['flows', 'settings', 'node-red', 'modbus-rtu', 'epr04', 'power-limit-node'], function() {
    return gulp.src('package.json').pipe(gulp.dest('solarem/docker'));
});

gulp.task('docker-rpi', ['docker-source-rpi', 'solarem'], function(
    done) {
    var proc = spawn('docker', ['build', '-t', 'sofkaski/solarem-rpi:1.1.1', 'solarem/docker'], {
        stdio: 'inherit'
    });

    proc.on('close', function(exitCode) {
        console.log('Process finished with code ' + exitCode);
        done(exitCode);
    });
});

gulp.task('docker', ['docker-source', 'solarem'], function(done) {
    var proc = spawn('docker', ['build', '-t', 'sofkaski/solarem:1.1.1', 'solarem/docker'], {
        stdio: 'inherit'
    });

    proc.on('close', function(exitCode) {
        console.log('Process finished with code ' + exitCode);
        done(exitCode);
    });
});

hub(['./Meter-EPR04/gulpfile.js', './node-red-contrib-modbus-rtu/gulpfile.js',
    './power-limit-node/gulpfile.js'
]);
