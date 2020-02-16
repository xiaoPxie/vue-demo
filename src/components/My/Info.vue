<template>
  <section class="info">
<!--    <h3>使用http-proxy-middleware插件解决跨域问题</h3>-->
<!--    <p>下方是github获取个人信息的api接口返回的信息</p>-->
<!--    <div class="panel">-->
<!--      <p>login: {{userInfo.login}}</p>-->
<!--      <p>id: {{userInfo.id}}</p>-->
<!--      <p>node_id: {{userInfo.node_id}}</p>-->
<!--      <p>avatar_url: {{userInfo.avatar_url}}</p>-->
<!--      <p>html_url: {{userInfo.html_url}}</p>-->
<!--      &lt;!&ndash;    使用管道格式化数据&ndash;&gt;-->
<!--      <p>created_at: {{userInfo.created_at | getYMD}}</p>-->
<!--      <p>updated_at: {{userInfo.updated_at | getYMD}}</p>-->
<!--      <p>type: {{userInfo.type}}</p>-->
<!--    </div>-->
    <div><img class="head-img" :src="require('../../assets/images/@3x/noface.gif')" alt=""></div>
    <div><p>login:</p>{{userInfo.login}}</div>
    <div><p>node_id:</p> {{userInfo.node_id}}</div>
    <div class="text-nowrap"><p>avatar_url:</p> {{userInfo.avatar_url}}</div>
    <div><p>html_url:</p> {{userInfo.html_url}}</div>
    <div><p>created_at:</p> {{userInfo.created_at | getYMD}}</div>
    <div><p>updated_at:</p> {{userInfo.updated_at | getYMD}}</div>
    <div class="bottom-panel">
      <router-link to="/my/sla">服务协议 =></router-link>
    </div>
  </section>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'info',
    components: {

    },
    data() {
      return {
        userInfo: {},
        hadData: false
      }
    },
    methods: {
      getDataList(id) {
        // axios的get请求有两种方式，一个是"api-url?key=value"形式，一个是api-url, "params {key:value,...}"
        axios.get("/users/" + id).then((res) => {
          console.log(res.data)
          console.groupEnd()
          this.userInfo = res.data;
        }).catch((error) => {
          console.warn(error)
        })
      }
    },
    created() {
      this.getDataList("jk");
    },
    beforeRouteEnter(to, from, next) {  //
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      if(toDepth < fromDepth) { // 前进，需要再次调取列表接口
        to.meta.isBack = true;
      }
      next()
    },
    activated() {
      if(!this.$route.meta.isBack) {
        // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
        this.getDataList("jk"); // ajax获取数据方法
      }
      // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
      this.$route.meta.isBack = false
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";
  @import "../../assets/css/common/util.scss";

  .info {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: px2rem(1000px);
    .head-img {
      width: px2rem(200px);
      height: px2rem(200px);
      border-radius: 50%;
    }
    & > div {
      width: 90%;
      /*padding: px2rem(20px);*/
      border-bottom: 1px solid #F6F6F6;
      font-size: px2rem(40px);
      font-weight: 700;
      color: #333;
      text-align: center;
      & > p {
        font-size: px2rem(30px);
        font-weight: 300;
        color: #ccc;
      }
      &:last-of-type {
        border-bottom: none;
      }
    }
    & > .bottom-panel {
      font-size: px2rem(30px);
    }
  }
</style>
