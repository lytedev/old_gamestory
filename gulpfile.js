var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var rev = require('gulp-rev');
var concat = require('gulp-concat');
var elixir = require('laravel-elixir');
var gulpif = require('gulp-if');
var _ = require('underscore');
var del = require('del');
var watch = require('gulp-watch');

var config = elixir.config;

/*
 |----------------------------------------------------------------
 | Have a Drink!
 |----------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic
 | Gulp tasks for your Laravel application. Elixir supports
 | several common CSS, JavaScript and even testing tools!
 |
 */

gulp.task('elixir', function() {

    elixir(function(mix) {
        mix.routes().events();
    });

});

/*
 |----------------------------------------------------------------
 | Build lytedev
 |----------------------------------------------------------------
 |
 | Build the lytedev resources, dawg.
 |
 */

// TODO: Scripts task

gulp.task('styles', function(options) {

    var defaults = {
        outputStyle: elixir.config.production ? 'compressed' : 'nested'
    };

    src = config.assetsDir + "sass/*.scss";
    var stream = gulp.src(src)
        .pipe(gulpif(!elixir.config.production, sourcemaps.init()))
            .pipe(sass(_.extend(defaults, options)))
        .pipe(gulpif(!elixir.config.production, sourcemaps.write('./maps')))
        .pipe(gulp.dest(config.cssOutput))

    return stream;

});

gulp.task('build-styles', ['styles'], function() {

    del(config.cssOutput + "/all.css", { force: true }, function() {
        gulp.src([
                './bower_components/normalize.css/normalize.css',
                config.cssOutput + "/*.css"
            ])
            .pipe(concat('all.css'))
            .pipe(gulp.dest(config.cssOutput));
    });

});

gulp.task('build', ['build-styles'], function() {

    // TODO: Support scripts
    var buildDir = 'public/build';
    var cssBuildDir = config.cssOutput + "/*.css"
    var jsBuildDir = config.jsOutput + "/*.js"

    del(buildDir, { force: true }, function() {
        gulp.src([cssBuildDir, jsBuildDir], { base: "./public" })
            .pipe(gulp.dest(buildDir))
            .pipe(rev())
            .pipe(gulp.dest(buildDir))
            .pipe(rev.manifest())
            .pipe(gulp.dest(buildDir))
    });

});

gulp.task('default', ['build'], function() {

});


gulp.task('watch', ['default'], function() {

    livereload.listen();

    watch('./resources/views/**/*.php', function() {
        livereload.changed();
    });

    watch(config.assetsDir + "sass/*.scss", function() {
        gulp.start('build-styles');
        livereload.changed();
    });

});

