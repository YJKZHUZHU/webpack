# webpack
webbpack 搭建脚手架
- npm run dev 启动8080端口
- npm run build 打包文件
### es6--->es5
- 安装babel模块 babel-loader @babel/core @babel/preset-env @babelpolyfill @babel/plugin-transform-runtime @babel/plugin-transform-runtime
- babel-loader 将es6 --> 转es5
- @babel/core 核心模块 核心 api 都在这个模块里面，比如：transform
- @babel/preset-env 只能预设，可以使用最新的js语法
-  @babel/polyfill babel默认只转化es6新语法，不转换新的API，如：Set，Map,Promise等，该插件可以转化新的API
- @babel/plugin-transform-runtime 优化代码
- @babel/plugin-transform-runtime 是一个可以重复使用 Babel 注入的帮助程序代码来节省代码的插件
