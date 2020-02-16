<template>
  <div id="home">
<!--    banner轮播-->
    <BannerSwiper></BannerSwiper>
<!--    导航入口-->
    <Entry></Entry>
<!--    限时活动-->
    <Activity></Activity>
  </div>
</template>

<script>
  import BannerSwiper from "./BannerSwiper";
  import Entry from "./Entry";
  import Activity from "./Activity";

  export default {
    name: 'Home',
    components: {
      BannerSwiper,
      Entry,
      Activity,
    },
    data() {
      return {
        isFirstEnter: true
      }
    },
    //第一次进入keep-alive路由组件时
    created() {
      this.isFirstEnter = true;
      // 只有第一次进入或者刷新页面后才会执行此钩子函数，使用keep-alive后（2+次）进入不会再执行此钩子函数
    },
    beforeRouteEnter(to, from, next) {
      // if(from.name === 'detail') { //判断是从哪个路由过来的，若是detail页面不需要刷新获取新数据，直接用之前缓存的数据即可
      //   to.meta.isBack = true;
      // }
      // next();
      // console.log(to)
      // console.log(from)
      // console.log(next)
      next();
    },
    // activated() {
    //   if(!this.$route.meta.isBack || this.isFirstEnter){
    //     // 如果isBack是false，表明是前进过来而不是后退回来，需要获取新数据，否则就不再请求，直接使用缓存的数据
    //     // 如果isFirstEnter是true，表明是第一次进入此页面或用户刷新了页面，需获取新数据
    //     this.data = ''// 把数据清空，可以稍微避免让用户看到之前缓存的数据
    //     this.getData();
    //   }
    //   // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    //   this.$route.meta.isBack=false
    //   // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
    //   this.isFirstEnter=false;
    // },
  }

// 第一次进入keep-alive组件时，其生命周期执行顺序：
//    beforeRouteEnter --> created --> mounted --> activated --> deactivated
// 非首次进入时，其生命周期执行顺序：
//    beforeRouteEnter -->activated --> deactivated
</script>
