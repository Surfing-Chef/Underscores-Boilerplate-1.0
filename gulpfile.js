// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    rename = require('gulp-rename');

// NAMED TASKS
// Scripts Task
gulp.task('scripts', function(){  // task called 'scripts'
  gulp.src(['dev/js/**/*.js', '!dev/js/**/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dev/js'));

});

// Compass/Sass Tasks - watch files and folders for changes
gulp.task('compass', function(){
  gulp.src('dev/sass/**/*.scss')
  .pipe(compass({
    config_file: './config.rb',
    css: 'dev/css',
    sass: 'dev/sass',
    require: ['susy']
  }))
    .pipe(gulp.dest('dev/css/'));
});

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('dev/js/**/*.js', ['scripts']);
  gulp.watch('dev/sass/**/*.scss', ['compass']);
});

// Default Task - runs specified tasks asynchronously
gulp.task('default', ['scripts', 'compass', 'watch']);
