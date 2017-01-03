// Wrapper function
module.exports = function(grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
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

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, // compass

    watch: {
      options: { livereload: true },
      scripts: {
        files: ['dev/js/*.js'],
        tasks: ['uglify']
      }, // scripts
      sass: {
        files: ['dev/sass/*.scss'],
        tasks: ['compass:dev']
      }, // sass
      html: {
        files: ['*.php']
      } //html
    } // watch

  }); // grunt.initConfig

  // Register default task(s)
  grunt.registerTask('default', 'watch');

}; // module.exports
