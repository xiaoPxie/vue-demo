// mock配置基本步骤
// 1、引入mockjs
import Mock from 'mockjs'
// 2、获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function(param) {
  console.log(param)
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}

// 模拟ajax请求的响应时间，默认(10ms-300ms)
Mock.setup({
  timeout: '100-300'
})
// 3、接收ajax请求，并返回模拟数据，这里使用函数的形式制定模拟数据
// Mock.mock( rurl, rtype, function( options ) )
//   rurl 可选：表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 /\/domain\/list\.json/、'/domian/list.json'。
//   rtype 可选：表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
// 记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
Mock.mock(RegExp('/news/index' + '.*'), 'get', produceNewsData);
