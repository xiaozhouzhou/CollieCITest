module.exports = function(grunt) {
  grunt.initConfig({
    mochacli: {
      options: {
        require: ['should'],
        files: 'test/*.js',
        save: 'coverage/test-results.xml'
      },
      test: {
        options: {
          reporter: 'xunit'
        }
      }
    },
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

  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('test', 'run test and generate coverage information', ['mochacli:test','mocha_istanbul:test']);
};