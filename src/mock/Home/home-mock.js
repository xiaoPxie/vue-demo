// mock配置基本步骤
// 1、引入mockjs
import Mock from 'mockjs'
// 2、获取 mock.Random 对象
let Random = Mock.Random

// 处理函数：mock一组数据
let produceNewsData = function(param) {
  console.group("Mock：request options and the response:")
  console.log(param)
  console.groupEnd();
  let bannerInfoList = [];
  for (let i = 0; i < 4; i++) {
    let bannerInfoObj = {
      // title: Random.csentence(5, 30), //  Random.csentence( min, max )
      url: "http://www.baidu.com",
      imgUrl: Random.dataImage('1080x458', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      // date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    bannerInfoList.push(bannerInfoObj)
  }

  return {
    bannerInfoList: bannerInfoList
  }
}

// 3、接收ajax请求，并返回模拟数据，这里使用函数的形式制定模拟数据
// 模拟ajax请求的响应时间，默认(10ms-300ms)
Mock.setup({
  timeout: '100-300'
})
// mock插件的问题，带参数get请求有bug，用正则+'.*'能解决大部分问题
Mock.mock(RegExp('/home/banner' + '.*'), 'get', produceNewsData)

