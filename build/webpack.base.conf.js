const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENTRY_PATH = path.resolve(__dirname, '../src/index.js')
const OUT_PATH = path.resolve(__dirname, '../dist')
module.exports = {
	entry: ENTRY_PATH,
	output: {
		filename: 'boundle.[hash:8].js',
		path: OUT_PATH
	},
	module: {

	},
	resolve: {
		// 配置别名
		alias: {

		}

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'), //自定义模板
			hash: true //引入的文件名会带hash值
		})
	],
}