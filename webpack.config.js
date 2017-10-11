const path = require('path');

module.exports = function () {
    return {
        devServer: {
            contentBase: path.resolve(__dirname, 'build'),
        },
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
        },
    }
};