// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// NAMED TASKS
// Scripts Task
gulp.task('scripts', function(){  // task called 'scripts'
  gulp.src(['_/js/**/*.js', '!_/js/**/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('_/js'));

});

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);  // watch a task called 'scripts'
});

// Default Task - runs both 'scripts' and 'watch' tasks asynchronously, at the same time
gulp.task('default', ['scripts']);
