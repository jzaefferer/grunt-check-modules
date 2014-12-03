module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: '<json:package.json>',
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        trailing: true,
        globals: {
          exports: true
        }
      },
      files: ['Gruntfile.js', 'tasks/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['jshint', 'check-modules']);

};