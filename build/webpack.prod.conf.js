const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin({
            path: path.resolve(__dirname, '../dist')
        })
    ]
})