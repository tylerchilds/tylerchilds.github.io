// Include gulp
var gulp = require('gulp');

// node file system
var fs = require('fs');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var clean = require('gulp-clean');
var swig = require('gulp-swig');

var vars = {
  data: {
    title: "Welcome"
  },
  // load_json: true
};

// Lint Task
gulp.task('lint', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    gulp.src('src/scss/import.scss')
        .pipe(sass())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minify())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src([
			'bower_components/jquery/dist/jquery.js',
            'src/js/Markdown.Converter.js',
            'src/js/Markdown.Sanitizer.js',
            'src/js/common.js'
		])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
    gulp.src([
            'src/js/static/**/*.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

// Build my awesome templates
gulp.task('swig', function(){
    gulp.src('src/html/**/*.html')
        .pipe(swig(vars))
        .pipe(gulp.dest('./'));
});

// Move vendor files to dest
gulp.task('vendor', function(){
    var stream = gulp.src('src/vendor/**/*.*')
        .pipe(gulp.dest('./'));

    return stream;
});

gulp.task('img', function(){
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('./img'));
});

// Clean build
gulp.task('clean', function() {
    gulp.src([
            'css',
            'js',
            'base-stylesheet',
            'mosaic',
            'vanilla-html',
            'index.html',
            'img'
        ])
        .pipe(clean({force: true}));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/html/**/*.html', ['swig']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'swig', 'vendor', 'img', 'watch']);