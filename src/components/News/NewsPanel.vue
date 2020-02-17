<template>
  <section class="news-panel">
    <div class="news-back">
      <img :src="newsBackObj.imgUrl" alt="">
      <div class="news-back-detail">
        <h3>热门新闻</h3>
        <p>您好，现在是 {{getDate()}}</p>
      </div>
    </div>
    <div class="news-nav">
      <div class="nav-list clearfix">
        <router-link class="item" :class="[$route.path.indexOf('/news/list/recommend') !== -1 ? 'active':'']"
                     to="/news/list/recommend">推荐</router-link>
        <router-link class="item" :class="[$route.path.indexOf('/news/list/current') !== -1 ? 'active':'']"
                     to="/news/list/current">时事</router-link>
      </div>
    </div>
<!--    &lt;!&ndash; 列表与列表项分开写，只为了父子组件通信的编写练习 &ndash;&gt;-->
<!--    <div class="news-list">-->
<!--      <router-link v-for="(item,index) in newsInfoList" :key="index" :to="'/news/detail/' + item.id">-->
<!--        <NewsItem :news-info="item" :key="index"></NewsItem>-->
<!--      </router-link>-->
<!--    </div>-->
    <keep-alive max="2">
      <router-view class="news-list-view"></router-view>
    </keep-alive>
  </section>
</template>

<script>
  import axios from "axios";
  import NewsItem from "./NewsItem"
  import ApiPath from "../../apis/api-path"

  export default {
    name: 'NewsPanel',
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
      this.getNewsBack();
      // this.getDataList();
    },
    methods: {
      getNewsBack() {
        axios.get(ApiPath.news.getNewsBack).then((res) => {
          console.group("新闻背景板数据接口返回")
          console.log(res.data)
          console.groupEnd()
          // this.newsInfoList = res.data.newsInfoList;
          this.newsBackObj.imgUrl = res.data.imgUrl
        }).catch((error) => {
          console.warn(error)
        })
      },
      getDataList() {
        axios.get(ApiPath.news.getNewsList).then((res) => {
          console.group("新闻列表数据接口返回")
          console.log(res.data)
          console.groupEnd()
          this.newsInfoList = res.data.newsInfoList;
        }).catch((error) => {
          console.warn(error)
        })
      },
      getDate() {
        let
          day = '',
          now = new Date();
        switch (now.getDay()) {
          case 0: day = '星期日';break;
          case 1: day = '星期一';break;
          case 2: day = '星期二';break;
          case 3: day = '星期三';break;
          case 4: day = '星期四';break;
          case 5: day = '星期五';break;
          default: day = '星期六';
        }
        return now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日 ' + day
      }
    },
    // beforeRouteEnter(to, from, next) {  //
    //   let toDepth = to.meta.index
    //   let fromDepth = from.meta.index
    //   if(toDepth < fromDepth) { // 前进，需要再次调取列表接口
    //     to.meta.isBack = true;
    //   }
    //   next()
    // },
    // activated() {
    //   if(!this.$route.meta.isFirstRender && !this.$route.meta.isBack) {
    //     // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
    //     // this.getDataList(); // ajax获取数据方法
    //   }
    //   // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    //   this.$route.meta.isBack = false
    //   this.$route.meta.isFirstRender = false
    // },
    // //在页面离开时记录滚动位置
    // beforeRouteLeave (to, from, next) {
    //   // this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //   // sessionStorage.setItem('NewsListScrollTop', this.scrollTop);
    //   // console.log("离开新闻列表时，滚动条的位置：" + this.scrollTop)
    //   next()
    // },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  /*.news-list {*/
  /*  display: flex;*/
  /*  flex-wrap: wrap;*/
  /*  width: 100%;*/
  /*  padding: px2rem(20px);*/
  /*  margin-bottom: px2rem(90px);*/
  /*  box-sizing: border-box;*/
  /*}*/
  .news-back {
    display: flex;
    position: relative;
    width: 100%;
    height: px2rem(320px);
    & > img {
      width: 100%;
      height: auto;
    }
  }
  .news-back-detail {
    position: absolute;
    left: px2rem(10px);
    bottom: px2rem(20px);
    font-size: px2rem(26px);
    color: #fff;
    & > h3 {
      margin-bottom: px2rem(10px);
      font-size: px2rem(40px);
    }
  }
  .news-nav {
    position: sticky;
    top: 0;
    width: 100%;
    height: px2rem(70px);
    line-height: px2rem(70px);
    font-size: px2rem(30px);
    background: #fff;
    z-index: 1;
    border-bottom-left-radius: px2rem(20px);
    border-bottom-right-radius: px2rem(20px);
    box-shadow: 0 px2rem(3px) px2rem(10px) rgba(0, 0, 0, 0.2);

  }
    .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;
      & > .item {
        display: inline-block;
        float: left;
        height: 100%;
        margin-right: px2rem(20px);
        color: #999;
        &.active {
          font-size: px2rem(35px);
          color: #333;
          border-bottom: 2px solid #5bb2f3;
        }
      }
    }

</style>
