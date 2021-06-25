const base = require('./webpack.config.js')
const HtmlWebpack = require('html-webpack-plugin')
const path = require('path')

module.exports = Object.assign({}, base, {
    plugins: [
        new HtmlWebpack({
            title: 'RUI',
            template: 'index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
})