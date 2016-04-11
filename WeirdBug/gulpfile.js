
var gulp = require('gulp');

gulp.task('default', function (done) {
    var config = require('./webpack.config');
    var webpack = require('webpack');

    config.output.filename = 'out_gulp.js';

    webpack(config, done);
});
