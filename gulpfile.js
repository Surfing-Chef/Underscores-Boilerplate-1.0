// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    php = require('gulp-connect-php'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

// NAMED TASKS
// Scripts Task - tasks related to js
gulp.task('scripts', function(){
  gulp.src(['dev/js/**/*.js', '!dev/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dev/js'))
  .pipe(reload({stream: true}));

});

// Compass/Sass Tasks - tasks related to sc scss and css
gulp.task('compass', function(){
  gulp.src('dev/sass/**/*.scss')
  .pipe(plumber())
  .pipe(compass({
    config_file: 'config.rb',
    css: 'dev/css',
    sass: 'dev/sass'
  }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dev/css/'))
    .pipe(reload({stream: true}));
});

// PHP Tasks - tasks related to php
gulp.task('php', function(){
  php.server({
    base: './',
    port: 810,
    keepalive: true
  });
});

// HTML Tasks - tasks related to html
gulp.task('html', function(){
  gulp.src('./')
  .pipe(reload({stream: true}));
});

// Browser-Sync Tasks - tasks related to browser-sync
gulp.task('browser-sync', function(){
  browserSync({
    proxy: 'http://localhost/underscores-dev/'
  });
});

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('dev/js/**/*.js', ['scripts']);
  gulp.watch('dev/sass/**/*.scss', ['compass']);
  gulp.watch('**/*.php', ['php']);
});

// Default Task - runs specified tasks asynchronously
gulp.task('default', ['scripts', 'compass', 'html', 'php', 'browser-sync', 'watch']);
