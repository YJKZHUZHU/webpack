// 浏览器样式前缀，yarn add postcss-loader autoprefixer -D
//配置文件，目录应该和webpack配置文件同级目录
const autoprefixer = require('autoprefixer')


module.exports = {
    plugins: [autoprefixer]
}