## 基于webpack的regularjs应用模板

### 使用
#### 1. 使用 regular-cli 初始化项目    
- 全局安装
```bash
npm install -g regular-cli
```
- 初始化项目
```bash
regular init <project-name>
```
- 示例
```bash
regular init test-project
cd test-project
# 安装依赖
npm install
# 开发环境
npm run dev
# 生产环境
npm run build
```

#### 2. github下载   
[https://github.com/fisher-zh/webpack-regular](https://github.com/fisher-zh/webpack-regular)

### 简介
该模板基于 webpack4.x  regular  regular-state 构建，目前已提供基础的开发功能，可以基于该模板进行单页面、多页面系统的开发。   
当然，如果你不喜欢内置的 regular  regular-state ，你完全可以通过修改入口文件（main.js），增加其他框架支持的 loader 来进行开发。

在构建该模板的过程中，并没有使用类似 vue 模板的方法对一些 webpack 的方法和插件进行封装，   
一方面由于时间和技术内管理有限，不能进行完备的测试，如果开发人员在使用过程中出现问题将难以定位和解决；   
另一方面，直接暴露出原有的文件给开发者可以提供更大的自由度。   

### 目录
```
|-- build                webpack配置和打包脚本
|-- config               部分webpack配置
|-- dist                 编译后文件目录
|-- node_modules
|-- public               静态资源和模板文件
|-- src                  项目文件夹
   |-- assets                资源
   |-- components            组件
   |-- view                  页面级组件
   |-- main.js               项目入口
|-- package.json         
|-- README.md
```


### 参考文档
[regularjs](http://regularjs.github.io/guide/)   
[regular-state](https://regularjs.github.io/regular-state/)

### 最后
欢迎各位使用者star和issue，作者将会尽快回复您的问题，商业联系邮箱：fisher_zh@163.com
