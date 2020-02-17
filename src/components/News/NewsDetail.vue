<template>
  <div class="news-detail" id="news-detail">
    <TopBar>
      <span slot="title">新闻详情</span>  <!-- 使用插槽 -->
    </TopBar>
    <div class="content">
      {{newDetail.detail}}
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import TopBar from "../Common/TopBar";
  import ApiPath from "../../apis/api-path";

  export default {
    name: 'news-detail',
    components: {
      TopBar
    },
    data() {
      return {
        id: this.$route.params.id,
        newDetail: {
          detail: ''
        }
      }
    },
    methods: {
      getDetailById(id) {
        axios.get(ApiPath.news.getDetailById + id).then((res) => {
          console.group("新闻详情数据接口请求")
          console.log(res.data)
          console.groupEnd()
          // this.newsInfoList = res.data.newsInfoList;
          // this.newsBackObj.imgUrl = res.data.imgUrl
          this.newDetail.detail = res.data.detail
        }).catch((error) => {
          console.warn(error)
        })
      }
    },
    mounted() {
      // index.js不设置scrollBehavior时，这里的滚动条会异常，所以要重置滚动条
      if(document.documentElement.scrollTop)
        setTimeout(()=>{
          document.documentElement.scrollTop = 0
        },500)
      else
        setTimeout(()=>{
          document.body.scrollTop = 0
        },500)
      this.getDetailById(this.id);
    },
  }
</script>

<style lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  #news-detail {

    &.news-detail {
      position: relative;
    }
    & > .content {
      padding: px2rem(90px) px2rem(15px) px2rem(15px);
    }
  }
  /*.common-nav {*/
  /*  transition: all 0.5s ease;*/
  /*}*/
</style>
