# vue-demo
## 页面适配使用了vw + rem的形式进行布局
### 仅仅作为vue的练手

> <h3>vue-cli 2.x + vue 2.x</h3>
> 另外用到了以下插件<br>
> ① axios：ajax请求方案<Br>
> ② mockjs：生成随机数据，拦截ajax请求，可作为后端api接口模拟的插件<Br>
> ③ vue-awesome-swiper：轮播插件<Br>
> ④ http-proxy-middleware：dev代理插件，解决跨域问题(生产环境不适用。工程打包后，nginx反向代理即可)<Br>
> ⑤ vue-lazyload：图片懒加载插件<Br>
> ⑥ vue-cookies： 封装cookie操作的插件


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

## nginx映射
生产环境上的跨域请求无法使用http-proxy-middleware本地代理，则可以使用nginx的反向代理功能，解决这个问题<Br>
后端配置例子
``` bash
修改nginx.conf，添加以下内容

    location / {
      root   xxxxx/dist;                // 此处是工程打包后的路径，如c:/project/dist
      index  index.html index.htm;
      try_files $uri $uri/ /index.html; // 解决路由history模式下，刷新就白屏的问题
    }
    location /users {    // 需跨域调用的接口path，代码中/users/xxxx，访问如https://api.github.com/users/xxxx，实现跨域
      add_header 'Access-Control-Allow-Origin' '*';
      proxy_pass https://api.github.com;
    }
    location /v1 {       // 同上
      add_header 'Access-Control-Allow-Origin' '*';
      proxy_pass https://suggest-follow-api-ms.juejin.im;
    }
```
<h3>特别需要注意的是，当路由模式是history时，还需特别的配置，详情点击</h3>
<a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html">HTML5 History 模式</a>

<h3>页面展示</h3>

<img src="https://raw.githubusercontent.com/xiaopxie/vue-demo/master/static/images/img01.png" />
<img src="https://raw.githubusercontent.com/xiaopxie/vue-demo/master/static/images/img02.png" />
<img src="https://raw.githubusercontent.com/xiaopxie/vue-demo/master/static/images/img03.png" />
