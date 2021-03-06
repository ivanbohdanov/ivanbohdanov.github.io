var gulp = require('gulp'),
  sass = require('gulp-sass'),
  pleeease = require('gulp-pleeease'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  reload      = browserSync.reload;

// Sass

gulp.task('sass', function () {
  gulp.src('src/scss/*.scss')
    .pipe(sass({errLogToConsole: true})) // Keep running gulp even though occurred compile error
    .pipe(pleeease({
        autoprefixer: {
            browsers: ['> 0.01%']
        }
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream:true}));
});

// Js-concat-uglify

gulp.task('js', function() {
  gulp.src(['src/js/*.js'])
    .pipe(plumber()) //Keep running gulp even though occurred compile error for js
    .pipe(concat('scripts.js'))
    .pipe(uglify({preserveComments: 'some'})) // Keep some comments
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream:true}));
});

// Imagemin

gulp.task('imagemin', function() {
  gulp.src(['src/img/*.{png,jpg,gif,svg}'])
    .pipe(imagemin({optimizationLevel: 7}))
    .pipe(gulp.dest('dist/img'));
});

// Static server

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

// Reload all browsers

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Task for `gulp` command

gulp.task('default',['browser-sync'], function() {
  gulp.watch('src/scss/**/*.scss',['sass']);
  gulp.watch('src/js/*.js',['js']);
  gulp.watch('src/img/**/*.{png,jpg,gif,svg}',['imagemin']);
  gulp.watch("*.html", ['bs-reload']);
});