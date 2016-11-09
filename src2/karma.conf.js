const cfg = require('./config/base.js');

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ], //Chrome
        //singleRun: true,
        browserNoActivityTimeout: 60000,
        frameworks: ['jasmine'],
        files: [
            './node_modules/babel-polyfill/dist/polyfill.js',
            //'config/webpack/webpack.test.js'
            //'./src/app/**/*.spec.js',
            './src/app/**/*.js'
        ],
        exclude: [
            './src/spp/assets/uui/**/*.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader',
            'karma-coverage',
            'karma-webpack',
            'karma-spec-reporter',
        ],
        preprocessors: {
            './src/app/**/*.js': [ 'webpack', 'sourcemap', 'coverage' ]
            //'config/webpack/webpack.test.js': [ 'webpack', 'sourcemap' ]
        },
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            type : 'html',
            dir : 'reports/coverage/'
        },
        webpack: {
            module: {
                preLoaders: [{
                    test: /\.js?$/,
                    exclude: /(node_modules|\.spec\.js$)/,
                    loader: 'istanbul-instrumenter'
                }],
                loaders: [
                    {
                        test: /\.js?$/,
                        exclude: /node_modules/,
                          loaders: ['ng-annotate', 'babel?extends=' + cfg.babel.configFile]
                    }
                ]
            },
            watch: true
        },
        /*webpackServer: {
            noInfo: true
        },*/
        webpackMiddleware: {
          //  stats: 'errors-only'
        }
    });
}
