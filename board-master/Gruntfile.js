module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            files: { 
                src: 'js/*.js',  // source files mask
                dest: 'build/',    // destination folder
                expand: true,    // allow dynamic building
                ext: '.js'   // replace .js to .min.js
            }
        },
        watch: {
            js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
        }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  
  };