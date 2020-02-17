// mock配置基本步骤
// 1、引入mockjs
import Mock from 'mockjs'
// 2、获取 mock.Random 对象
let Random = Mock.Random

// 用户mock数据
let users = [
  {
    "id": '1',
    "username": "jk",
    "password": "root",
    "token": new Date().getTime(),
  },
  {
    "id": '2',
    "username": "oiu121123123",
    "password": "123456",
    "token": new Date().getTime(),
  }]

// 用户登录mock接口
let loginProcess = function(param) {
  console.group("Mock：用户登录接口:")
  console.log(param.body)
  console.groupEnd()
  let userObj = JSON.parse(param.body),
      token = "",
      code = 0,
      message = "登录失败，请检查用户名与密码！";
  // 用户名与密码不为空
  if(userObj.username && userObj.username !== "" && userObj.password && userObj.password !== ""){
    users.forEach(function (item, index, array) {
      if(userObj.username === item.username && userObj.password === item.password){
        token = new Date().getTime();
        code = 1000;
        message = "登录成功！";
      }
    })
  }
  return {
    token: token,
    code: code,
    message: message
  }
}

// 3、接收ajax请求，并返回模拟数据，这里使用函数的形式制定模拟数据
// 模拟ajax请求的响应时间，默认(10ms-300ms)
Mock.setup({
  timeout: '100-300'
})
// 接收调用新闻列表接口的请求
Mock.mock(RegExp('/user/login' + '.*'), 'post', loginProcess)
