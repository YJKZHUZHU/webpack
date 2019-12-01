const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname,'../public')
    },
    plugins: [
        
    ]
})
