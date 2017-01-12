// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    rename = require('gulp-rename');

// NAMED TASKS
// Scripts Task
gulp.task('scripts', function(){  // task called 'scripts'
  gulp.src(['_/js/**/*.js', '!_/js/**/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('_/js'));

});

// Compass/Sass Tasks - watch files and folders for changes
gulp.task('compass', function(){
  gulp.src('_/sass/**/*.scss')
  .pipe(compass({
    config_file: './config.rb',
    css: '_/css',
    sass: '_/sass',
    require: ['susy']
  }))
    .pipe(gulp.dest('_/css/'));
});

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('_/js/**/*.js', ['scripts']);
  gulp.watch('_/sass/**/*.scss', ['compass']);
});

// Default Task - runs specified tasks asynchronously
gulp.task('default', ['scripts', 'compass', 'watch']);
