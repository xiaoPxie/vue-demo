// mock配置基本步骤
// 1、引入mockjs
import Mock from 'mockjs'
// 2、获取 mock.Random 对象
let Random = Mock.Random

// 背景板mock接口
let produceNewsBackground = function() {
  console.group("Mock：新闻背景板接口:")
  console.log("response data：")
  console.groupEnd()
  let newsBackObj = {}
  newsBackObj.imgUrl = Random.dataImage('1080x458')
  return newsBackObj;
}

// 新闻列表mock接口
let produceNewsData = function(param) {
  console.group("Mock：新闻列表接口:")
  console.log(param)
  console.groupEnd();
  let newsInfoList = [];
  for (let i = 0; i < 10; i++) {
    let newsInfoObj = {
      id: Random.integer(10000),
      title: Random.csentence(20, 50), //  Random.csentence( min, max )
      detail: Random.csentence(100, 300),
      // url: "http://www.baidu.com",
      imgUrl: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    newsInfoList.push(newsInfoObj)
  }

  return {
    newsInfoList: newsInfoList
  }
}

// 详情接口
let produceNewsDetail = function(param) {
  console.group("Mock：新闻详情接口:")
  console.log("response data：")
  console.log(param)
  let newsDetailObj = {}
  newsDetailObj.detail = Random.csentence(1000, 3000)
  console.log(newsDetailObj)
  console.groupEnd()
  return newsDetailObj;
}

// 3、接收ajax请求，并返回模拟数据，这里使用函数的形式制定模拟数据
// 模拟ajax请求的响应时间，默认(10ms-300ms)
Mock.setup({
  timeout: '100-300'
})
// mock插件的问题，带参数get请求有bug，用正则+'.*'能解决大部分问题
// 接收调用新闻列表接口的请求
Mock.mock(RegExp('/news/list' + '.*'), 'get', produceNewsData)
// 接收调用新闻背景板接口的请求
Mock.mock(RegExp('/news/back' + '.*'), 'get', produceNewsBackground)
// 接收调用新闻详情接口的请求
Mock.mock(RegExp('/news/detail' + '.*'), 'get', produceNewsDetail)
