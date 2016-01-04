var path = require('path');
module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'template-generator.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', "stage-0"]
            }
        }]
    },
    plugins: []
};
