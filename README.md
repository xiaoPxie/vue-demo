# vue-demo
仅仅作为vue的练手项目，请勿用于商业活动，否则后果自负

> <h3>vue-cli 2.x + vue 2.x</h3>
> 另外用到了以下插件<br>
> ① axios：ajax请求方案<Br>
> ② mackjs：生成随机数据，拦截ajax请求，可作为后端api接口模拟插件<Br>
> ③ vue-awesome-swiper：轮播插件<Br>
> ④ http-proxy-middleware：前端代理插件，解决跨越问题。不使用jsonp的方案，因为只能是get请求

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue-cli构建的工程并没有scss依赖，要手动安装
``` bash
安装node-sass、sass-loader
# npm install node-sass --save-dev
# npm install sass-loader@7.3.1 --save-dev 这里注意要指定版本安装，否则会报错

```

## 使用了vue-cli脚手架搭建的demo
部署到web应用服务器步骤，这里以tomcat为例：
1、修改 工程目录/config/index.js 中 assetsPublicPath 的值共有两处，将 '/' 统一修改为  './'，否则页面路径会出错，一片空白
2、运行 npm run build 命令将工程打包，输出到dist目录下，复制dist目录下的所有文件夹和文件
3、在tomcat根目录/webapps/ 创建目录，如vue-demo，将复制的文件夹与文件放在刚创建的vue-demo目录下
4、运行tomcat ，tomcat根目录/bin/startup.bat

