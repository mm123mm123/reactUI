const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        rui: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'RUI',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            title: 'RUI',
            template: 'index.html'
        })
    ]
}