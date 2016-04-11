var config = require('./webpack.config');
var webpack = require('webpack');

config.output.filename = 'out_server.js';

webpack(config, function () { });
