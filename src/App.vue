<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="fade" mode="out-in">
<!--&lt;!&ndash;      <router-view v-if="!$route.meta.keepAlive"></router-view>&ndash;&gt;-->
<!--&lt;!&ndash;      <keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;          <router-view v-if="$route.meta.keepAlive"></router-view>&ndash;&gt;-->
<!--&lt;!&ndash;      </keep-alive>&ndash;&gt;-->
      <keep-alive>
        <router-view />
      </keep-alive>
<!--      <router-view name="bottom" />-->
    </transition>
<!--    底部导航栏-->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
  //1,导入组件
  import Demo from "./components/Common/Demo";
  import BottomNav from './components/Common/BottomNav.vue'
  import Home from "./components/Home/Home";

  export default {
    name: 'App',
    //2,注册组件
    components: {
      Demo,
      BottomNav,
      Home,
    },
  }
</script>

<style lang="scss">
  @import "assets/css/common/util.scss";
  @include root-font-size();

  #app {
    padding-bottom: px2rem(96px);
  }

  /*页面切换动画*/
  /*!*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*!*/
  .fade-enter-active {
    transition: opacity .5s;
  }
  /*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
  .fade-enter {
    opacity: 0;
  }
  /*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
  .fade-leave {
    opacity: 1;
  }
  /*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
  .fade-leave-active {
    opacity:0;
    transition: opacity .5s;
  }
</style>
