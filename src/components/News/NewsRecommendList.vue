<template>
  <section class="list-wrap">
<!--    <div class="news-nav">-->
<!--      <div class="nav-list clearfix">-->
<!--        <a class="item active" href="javascript:void(0)">推荐</a>-->
<!--        <a class="item" href="javascript:void(0)">时事</a>-->
<!--        <router-link to="/news/panel/recommend">推荐</router-link>-->
<!--        <router-link to="/news/panel/current">时事</router-link>-->
<!--      </div>-->
<!--    </div>-->
    <!-- 列表与列表项分开写，只为了父子组件通信的编写练习 -->
    <div class="news-list">
      <router-link v-for="(item,index) in newsInfoList" :key="index" :to="'/news/detail/' + item.id">
        <NewsItem :news-info="item" :key="index"></NewsItem>
      </router-link>
    </div>
  </section>
</template>

<script>
  import NewsItem from "./NewsItem"
  import ApiPath from "../../apis/api-path"
  import api from "../../axios/ajax.js"

  export default {
    name: 'NewsRecommendList',
    components: {NewsItem},
    data() {
      return {
        transitionName: 'slide-left',
        isScrollTop: false,
        scrollTop: 0,
        newsBackObj: {
          imgUrl: ''
        },
        newsInfoList: []
      }
    },
    mounted() {
      this.getDataList();
    },
    methods: {
      getDataList() {
        api.get(ApiPath.news.getNewsList, {}).then((res) => {
          console.group("新闻列表数据接口返回")
          console.log(res)
          console.groupEnd()
          this.newsInfoList = res.newsInfoList;
        }).catch((error) => {
          console.warn(error)
        })
      },
    },
    beforeRouteEnter(to, from, next) {  //
      let toDepth = to.meta.index
      let fromDepth = from.meta.index
      if(toDepth < fromDepth) { // 前进，需要再次调取列表接口
        to.meta.isBack = true;
      }
      next()
    },
    activated() {
      if(!this.$route.meta.isFirstRender && !this.$route.meta.isBack) {
        // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
        // this.getDataList(); // ajax获取数据方法
      }
      // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
      this.$route.meta.isBack = false
      this.$route.meta.isFirstRender = false
    },
    //在页面离开时记录滚动位置
    beforeRouteLeave (to, from, next) {
      // this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // sessionStorage.setItem('NewsListScrollTop', this.scrollTop);
      // console.log("离开新闻列表时，滚动条的位置：" + this.scrollTop)
      next()
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  .news-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: px2rem(20px);
    margin-bottom: px2rem(90px);
    box-sizing: border-box;
  }
  .news-back {
    display: flex;
    position: relative;
    width: 100%;
    /*height: px2rem(240px);*/
    max-height: px2rem(400px);
    & > img {
      width: 100%;
      height: auto;
    }
  }
  /*.news-nav {*/
  /*  position: sticky;*/
  /*  top: 0;*/
  /*  width: 100%;*/
  /*  height: px2rem(70px);*/
  /*  line-height: px2rem(70px);*/
  /*  font-size: px2rem(30px);*/
  /*  background: #fff;*/
  /*  z-index: 1;*/
  /*  border-bottom-left-radius: px2rem(20px);*/
  /*  border-bottom-right-radius: px2rem(20px);*/
  /*  box-shadow: 0 px2rem(3px) px2rem(10px) rgba(0, 0, 0, 0.2);*/

  /*}*/
  /*  .nav-list {*/
  /*    display: flex;*/
  /*    justify-content: center;*/
  /*    align-items: center;*/
  /*    & > .item {*/
  /*      display: inline-block;*/
  /*      float: left;*/
  /*      height: 100%;*/
  /*      margin-right: px2rem(20px);*/
  /*      color: #999;*/
  /*      &.active {*/
  /*        font-size: px2rem(35px);*/
  /*        color: #333;*/
  /*        border-bottom: 2px solid #5bb2f3;*/
  /*      }*/
  /*    }*/
  /*  }*/
</style>
