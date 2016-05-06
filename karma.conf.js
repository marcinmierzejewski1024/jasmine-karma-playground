// Karma configuration
// Generated on Fri Apr 29 2016 18:05:24 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    singleRun: true,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/*.js': ["browserify"],
      'spec/*.js': ["browserify"]
    },

    coverageReporter: {
      type:"text"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    babelPreprocessor: {
      options: {
        presets: ['es2015']
      }
    },
    browserify: {
    "debug": true,
    "transform": [ "babelify", "browserify-istanbul"]
    }

  })
}
