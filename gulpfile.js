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
			'bower_components/jquery/dist/jquery.js'
		])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
    gulp.src([      
            'src/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

// Concatenate html
gulp.task('html', function() {
    gulp.src('src/html/**/*.html')
        .pipe(preprocess())
        .pipe(gulp.dest('./'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/html/**/*.html', ['html']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'html', 'watch']);