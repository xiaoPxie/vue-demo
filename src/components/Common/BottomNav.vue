<template>
  <footer class="common-nav" id="common-nav">
    <div class="nav-list">
<!--      编程式：默认精确匹配-->
<!--      <a v-for="(item,index) in data.data" :key="index" @click.prevent="routerClick(index)"-->
<!--         :class="[$route.name.indexOf(item.text) !== -1 ? 'active':'']" class="nav-item" >-->
<!--        <div class="item-wrap">-->
<!--          <span class="icon" :class="['icon-'+index, $route.name.indexOf(item.text) !== -1 ? 'active':'']"></span>-->
<!--          <span class="text" :class="[$route.name.indexOf(item.text) !== -1 ? 'active':'']" >{{item.text}}</span>-->
<!--        </div>-->
<!--      </a>-->
<!--      声明式：默认模糊匹配，添加exact声明为精确匹配-->
      <router-link v-for="(item,index) in data.data" :key="index"
                   :to="item.url" :class="$route.path.indexOf(item.url) !== -1 ? 'active':''" class="nav-item">
        <div class="item-wrap">
          <span class="icon" :class="['icon-'+index, $route.path.indexOf(item.url) !== -1 ? 'active':'']"></span>
          <span class="text" :class="[$route.path.indexOf(item.url) !== -1 ? 'active':'']">{{item.text}}</span>
        </div>
      </router-link>
    </div>
  </footer>
</template>

<script>
  var jsonData = {
    "data": [
      {"text": "首页", "url": "/home"},
      {"text": "新闻", "url": "/news"},
      // {"text": "火热促销"},
      // {"text": "商城"},
      // {"text": "购物车"},
      {"text": "我的", "url": "/my"},
    ]
  }

  export default{
    name: "bottom-nav",
    data() {
      return {
        data: jsonData,
        // itemActive: '首页',  //默认选中第一项
      }
    },
    methods: {
      // 编程式路由
      routerClick: function (index) {
        switch (index) {
          case 0:
            this.$router.push({
              name: '首页',
              params: {}
            })
            break;
          case 1:
            this.$router.push({
              name: '新闻',
              params: {}
            })
            break;
          case 2:
            this.$router.push({
              name: '我的',
              params: {
                id: 'xiaoPxie'
              }
            })
            break;
          default:
            this.$router.push({
              name: '首页',
              params: {}
            })
        }
      } // end functions

    }, // end methods
    mounted(){
      // console.log(this.$route)
    },
    updated() {
      // console.log(this.$route)
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': function () {
        // console.log(this.$route)
      }
    },
  }
</script>

<style lang="scss">
  @import "../../assets/css/common/util.scss";
  .common-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: px2rem(96px);
    background: #fff;
    box-shadow:0 px2rem(3px) px2rem(15px) #98254e;
    z-index: 100;
    transition: all 0.5s ease;

    .nav-list {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .nav-item {
      position: relative;
      flex-grow: 1;
      height: 100%;
      font-size: 0;
      color: #333;
      & .item-wrap {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      & .icon {
        display: block;
        margin: 0 auto px2rem(11px);
      }
      & .icon-0 {
        width: px2rem(30px);
        height: px2rem(30px);
        /*background-image: url("../../assets/images/@2x/nav01-a@2x.webp"); //默认使用2倍图*/
        background-image: image-set(  //使用image-set来适配高清图
            url("../../assets/images/@2x/nav01-a@2x.webp") 2x,
            url("../../assets/images/@3x/nav01-a@3x.webp") 3x,
        );
        background-size: contain;
        &.active {
          /*background-image: url("../../assets/images/@2x/nav01-b@2x.png");*/
          background-image: image-set(
              url("../../assets/images/@2x/nav01-b@2x.png") 2x,
              url("../../assets/images/@3x/nav01-b@3x.png") 3x,
          );
          background-size: contain;
        }
      }
      & .icon-1 {
        width: px2rem(24px);
        height: px2rem(29px);
        background-image: url("../../assets/images/@2x/nav02-a@2x.webp");
        background-size: contain;
        &.active {
          background-image: url("../../assets/images/@2x/nav02-b@2x.png");
          background-size: contain;
        }
      }
      & .icon-2 {
        width: px2rem(29px);
        height: px2rem(27px);
        background-image: url("../../assets/images/@2x/nav03-a@2x.webp");
        background-size: contain;
        &.active {
          background-image: url("../../assets/images/@2x/nav03-b@2x.png");
          background-size: contain;
        }
      }
      & .icon-3 {
        width: px2rem(36px);
        height: px2rem(27px);
        background-image: url("../../assets/images/@2x/nav04-a@2x.webp");
        background-size: contain;
        &.active {
          background-image: url("../../assets/images/@2x/nav04-b@2x.png");
          background-size: contain;
        }
      }
      & .icon-4 {
        width: px2rem(25px);
        height: px2rem(26px);
        background-image: url("../../assets/images/@2x/nav05-a@2x.png");
        background-size: contain;
        &.active {
          background-image: url("../../assets/images/@2x/nav05-b@2x.webp");
          background-size: contain;
        }
      }
      & .text {
        color: #333;
        font-size: px2rem(19.44px);
        &.active { color: #941844; }
      }
      /*&:link { color: #333; }*/
      /*&:hover { color: #333; }*/
    }
  }
</style>
