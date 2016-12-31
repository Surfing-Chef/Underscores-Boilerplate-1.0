// Wrapper function
module.exports = function(grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

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
    }, // uglify
    watch: {
      files: ['dev/js/*.js'],
      tasks: ['uglify']
    } // watch
  }); // grunt.initConfig

  // Register default task(s)
  grunt.registerTask('default', 'watch');

}; // module.exports
