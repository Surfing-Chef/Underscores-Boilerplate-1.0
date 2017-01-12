// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// NAMED TASKS
// Scripts Task
gulp.task('scripts', function(){  // task called 'scripts'
  console.log('It works');
});

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);  // watch a task called 'scripts'
});

// Default Task - runs both 'scripts' and 'watch' tasks asynchronously, at the same time
gulp.task('default', ['scripts', 'watch']);
