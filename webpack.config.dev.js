const base = require('./webpack.config.js')
const HtmlWebpack = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    plugins: [
        new HtmlWebpack({
            title: 'RUI',
            template: 'index.html'
        })
    ],
})