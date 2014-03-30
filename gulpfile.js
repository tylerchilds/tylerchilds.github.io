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
  load_json: true
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

// Concatenate html
gulp.task('html', function() {
    gulp.src(['src/html/**/*.html', 'src/html/**/*.json'])
        .pipe(preprocess())
        .pipe(gulp.dest('./src/temp'));

});

gulp.task('swig', ['html'], function(){
    gulp.src('src/temp/**/*.html')
        .pipe(swig(vars))
        .pipe(gulp.dest('./'));
});

// Clean build
gulp.task('clean', function() {
    gulp.src([
            'css',
            'js',
            'projects',
            'index.html',
            'src/temp'
        ])
        .pipe(clean({force: true}));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch(['src/html/**/*.html', 'src/includes/**/*.html'], ['html', 'swig']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'html', 'swig', 'watch']);