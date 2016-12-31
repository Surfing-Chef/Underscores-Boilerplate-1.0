// Wrapper function
module.exports = function(grunt) {
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Project configuration
  grunt.initConfig({
    // Tasks to run, comma separated
    uglify: {
      my_target: {
        files: {
          'js/customizer.js': ['dev/js/customizer.js'],
          'js/navigation.js': ['dev/js/navigation.js'],
          'js/skip-link-focus-fix.js': ['dev/js/skip-link-focus-fix.js']
        } // files
      } // my_target
    } // uglify
  }); // grunt.initConfig
}; // module.exports
