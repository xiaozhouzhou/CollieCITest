module.exports = function(grunt) {
  grunt.initConfig({
    mocha_istanbul: {
      test: {
        src: 'test',
        options: {
          reporter: 'mocha-jenkins-reporter',
          reportFormats: ['cobertura', 'lcov']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.registerTask('test', 'run test and generate coverage information', ['mocha_istanbul:test']);
};