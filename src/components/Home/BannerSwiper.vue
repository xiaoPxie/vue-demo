<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="banner-swiper" id="banner-swiper">
    <div class="header-logo-wrap">
      <a href="javascript:void(0)">
<!--        <img class="logo-img" src="../../assets/images/@2x/logo@2x-new.png" alt="">-->
      </a>
    </div>
<!--    组件加v-if解决异步数据的各种问题，因为v-if指令在条件为false时，vue不会进行加载-->
    <div v-if="reRender">
      <swiper :options="swiperOption" v-if="dataList.length > 0" >
        <swiper-slide v-for="(item,index) in dataList" :key="index">
          <a :href="item.url">
            <img :src="item.imgUrl">
          </a>
        </swiper-slide>
      </swiper>
      <div class="banner-swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import ApiPath from "../../apis/api-path.js"
  import api from "../../axios/ajax.js"

  // var jsonArry = [
  //   {url: "http://www.baidu.com", "imgUrl": "/static/images/banner01@3x.png"},
  //   {url: "http://www.baidu.com", "imgUrl": "/static/images/banner01@3x.png"},
  //   {url: "http://www.baidu.com", "imgUrl": "/static/images/banner01@3x.png"},
  //   {url: "http://www.baidu.com", "imgUrl": "/static/images/banner01@3x.png"}
  // ]
  export default {
    name: 'banner-swiper',
    data() {
      return{
        dataList: [],
        swiperOption: {//swiper3
          autoplay: 3000,
          autoplayDisableOnInteraction : false,
          speed: 500,
          loop: true,
          pagination: '.banner-swiper-pagination',
          // spaceBetween : 20, // 每页轮播的间隔
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
        },
        reRender: false // 是否需要重新渲染，针对轮播组件
      }
    },
    created() {

    },
    mounted() {
      this.getDataList();
    },
    activated() {
      this.reRender = false;
      setTimeout(() => {
        this.reRender = true;
      }, 100);
    },
    methods: {
      getDataList() {
        // axios的get请求有两种方式，一个是"api-url?key=value"形式，一个是api-url, "params {key:value,...}"
        api.get(ApiPath.home.getIndexInfo, {
          params: { 'key': '123456' }
        }).then( res => {
          console.log(res.bannerInfoList)
          this.dataList = res.bannerInfoList;
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  .banner-swiper {
    position: relative;
    width: 100%;
    height: px2rem(320px);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-logo-wrap {
    position: absolute;
    top: 0;
    left: px2rem(42px);
    z-index: 100;
    .logo-img {
      display: block;
      width: px2rem(117px);
      height: px2rem(96px);
    }
  }
  /* 因为分页是在mouted里创建的，此时创建的DOM，vue不会加上scoped自定义属性，因此使用穿透解决，提升权值以及使用 /deep/ */
  #banner-swiper /deep/ .banner-swiper-pagination {
    position: absolute;
    left: 50%;
    bottom: px2rem(24px);
    transform: translateX(-50%);
    z-index: 1;
  }
  #banner-swiper /deep/ .swiper-pagination-bullet {
    margin-right: px2rem(15px);
    background: #d1d1d1;
  }
  #banner-swiper /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #ffa302;
  }

</style>
