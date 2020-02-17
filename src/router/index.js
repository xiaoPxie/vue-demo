import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home/Home";
// import BottomNav from "../components/Common/BottomNav";

Vue.use(Router)

// 新闻
const News = ()=>import("../components/News/News")
const NewsPanel = () => import("../components/News/NewsPanel")
const NewsDetail = ()=>import("../components/News/NewsDetail")
const NewsRecommendList = ()=>import("../components/News/NewsRecommendList")
const NewsCurrentList = ()=>import("../components/News/NewsCurrentList")
// 我的
const My = ()=>import("../components/My/My")
const sla = ()=>import("../components/My/SLA")
const Info = ()=>import("../components/My/Info")
const Login = ()=>import("../components/User/Login")

const routes = [
  {
    path: '/', // 默认页面重定向到主页
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      index: 1,
      keepAlive: false, //缓存页面，不刷新
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      index: 1,
      keepAlive: true, //缓存页面，不刷新
      isBack: false
    }
  },
  {
    path: '/news',
    component: News,
    meta: {
      keepAlive: true,
      meta: {
        index: 1,
        isBack: false
      },
    },
    children: [
      {
        path: 'list',
        // name: 'news-panel',
        component: NewsPanel,
        meta: {
          index: 2,
          // isBack: false,
          // isFirstRender: true
        },
        children: [
          {
            path: '/news/list/recommend',
            name: 'news-recommend',
            component: NewsRecommendList,
            meta: {
              index: 2,
              isFirstRender: true
            }
          },
          {
            path: '/news/list/current',
            name: 'news-current',
            component: NewsCurrentList,
            meta: {
              index: 2,
              isFirstRender: true
            }
          },
          {
            path: '/',     //
            redirect: '/news/list/recommend'
          },
        ]
      },
      {
        path: '/news/detail/:id',
        name: 'news-detail',
        component: NewsDetail,
        meta: {
          index: 3,
          isBack: false
        },
      },
      {
        path: '/',     // 在详情页刷新页面，返回重定向到列表页
        redirect: 'list'
      },
    ]
  },
  {
    path: '/my',
    component: My,
    // component: Login,
    meta: {
      index: 1,
      isBack: false,
      keepAlive: true //
    },
    children: [
      {
        path:'info',
        name: 'user',
        component: Info,
        meta: {
          index: 2,
          isBack: false
        },
      },
      {
        path:'sla',
        name: 'service',
        component: sla,
        meta: {
          index: 3,
          isBack: false
        },
      },
      {
        path: '/',     // 在详情页刷新页面，返回重定向到列表页
        redirect: 'info'
      },
    ]
  },
  {
    path: '/*',
    redirect: '/home'
  },
]

const router = new Router({
  // 路由配置
  routes: routes,
  // 记录滚动条的位置
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   }
  //   else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  //  mode取值说明：
  // （1）histroy：URL就像正常的 url，示例：http://localhost:8080/home
  // （2）hash：默认值，会多一个“#”，示例：http://localhost:8080/#/home
  // mode: 'history', //mode模式
})

// 全局路由拦截-进入页面前执行：最常用
router.beforeEach((to, from, next) => {
  // 这里可以加入全局登陆判断

  // 参数说明：
  // to: Route : 即将要进入的目标 [路由对象]
  // from: Route : 当前导航正要离开的路由
  // next: Function : 继续执行函数

  // next()：继续执行
  // next(false)：中断当前的导航。
  // next(‘/‘) 或 next({ path: ‘/‘ })：跳转新页面，常用于登陆失效跳转登陆
  console.group("路由前进后退情况")
  console.log(to)
  console.log(from)
  console.groupEnd();
  // 登录判断
  // 我的
  // let userObj = sessionStorage.getItem("user")
  let userObj = Vue.$cookies.get("user");
  if(to.path.indexOf('/my') !== -1 && userObj == null) {
    next({path: '/login'})
  }else if(to.path.indexOf('/my') !== -1 && userObj != null){
    // 在登录页中，若session不为空，跳转到home
    next()
  }else{
    // 在index >= 3的页面里，则隐藏导航条
    if(to.meta.index >= 3 && from.path !== '/'){
      let commonNavEl = document.getElementById("common-nav");
      commonNavEl.style.bottom = '-100%'
    }
    next();
  }
  //
  // next();
});

// 全局后置钩子-常用于结束动画等
router.afterEach((to, from) => {
  // 重新显示导航条
  let commonNavEl = document.getElementById("common-nav");
  if(to.meta.index >= 3 && from.path === '/'){ // 在index >= 3的页面强制刷新，则隐藏导航条
    commonNavEl.style.bottom = '-100%'
  }
  else if(to.meta.index < 3 && from.path !== '/'){
    commonNavEl.style.bottom = '0'
  }
  //不接受next
});

export default router
