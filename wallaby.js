var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      {pattern: 'src/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.spec.js', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};