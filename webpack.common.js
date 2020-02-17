const path = require('path');

module.exports = {
    // entry chinh de bundle
    entry: ['./src/js/index.js', './src/sass/index.scss'],
    // output
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: [/node_modules/]
        }]
    }
}