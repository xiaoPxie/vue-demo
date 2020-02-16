/**
 * 格式化数据
 * 用管道符模式进行使用，如： {{ 数据 | 过滤器 }}
 */

import Vue from "vue";

// 时间过滤器
Vue.filter('getYMD', function(input) {
  if(typeof(input) === 'string')
    return input.split('T')[0];
})
