"use strict";
var config = {
    entry: './in.js',
    output: {
        filename: 'out.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
        ],
    },
};
module.exports = config;
