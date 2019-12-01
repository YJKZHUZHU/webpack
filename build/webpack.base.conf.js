const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtrectPlugin = require('mini-css-extract-plugin')//将css文件从js代码中抽离
const ENTRY_PATH = path.resolve(__dirname, '../src/index.js')
const OUT_PATH = path.resolve(__dirname, '../dist')

//css代码压缩，sass,less会自动压缩，css不会自己自动压缩，开发过程中如果使用的是css 则安装插件  optimize-css-assets-webpack-plugin，到时js代码不会被压缩了，
//需要引入uglifyplugin插件将js代码压缩
module.exports = {
	entry: ENTRY_PATH,
	output: {
		filename: 'boundle.[hash:8].js',
		path: OUT_PATH
	},
	module: {
		rules: [{
				// css-loader 处理@import这种语法的
				//style-loader他是把css插入到head标签中
				//loader的特点是希望单一
				//loader的用法
				//1:字符串，只能放一个loader use: 'style-loader'
				//2:多个loader，数组 use: ['style-loader','css-loader']
				//3:对象方式  use: [{loader:'style-loader',options: {}},'css-loader']
				//loader的执行顺序，右----> 左执行，下----> 上
				//postcss-loader 样式前缀
				test: /\.css$/,
				use: [MiniCssExtrectPlugin.loader, 'css-loader','postcss-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [MiniCssExtrectPlugin.loader,'css-loader', 'less-loader','postcss-loader']
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				use: [MiniCssExtrectPlugin.loader,'css-loader','sass-loader','postcss-loader']
			}
		]

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
		}),
		new MiniCssExtrectPlugin({
			filename: 'main.css'
		})
	],
}