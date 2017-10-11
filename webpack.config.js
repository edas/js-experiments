const path = require('path');

module.exports = options => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'build'),
        },
    }
}