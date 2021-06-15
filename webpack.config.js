const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        rui: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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
            },
            {
                test: /\.svg?$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s[ac]ss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
}