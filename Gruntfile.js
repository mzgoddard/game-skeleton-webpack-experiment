'use strict';

module.exports = function(grunt) {
  grunt.loadTasks('tasks');

  grunt.registerTask('build-env', function() {
    process.env.BABEL_ENV = 'production';
  });

  grunt.registerTask('default', ['webpack-dev-server']);
  grunt.registerTask('build', ['build-env', 'webpack']);
};
