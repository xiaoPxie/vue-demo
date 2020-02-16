<!-- The ref attr used to find the swiper instance -->
<template>
<nav>
  <div class="nav-list">
    <a v-for="(item,index) in dataList" :key="index" class="nav-item" :href="item.url">
      <span class="icon" :class="'icon-'+index">
        <img :src="item.imgUrl" alt="">
      </span>
      <h3 class="text">{{item.text}}</h3>
    </a>
  </div>
</nav>
</template>

<script>

  var dataList = [
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry01@3x.webp", text: "热销专区"},
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry02@3x.webp", text: "限时抢购"},
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry03@3x.webp", text: "分类管理"},
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry04@3x.webp", text: "礼品中心"}
  ]

  export default {
    name: 'entry',
    data() {
      return{
        dataList: dataList
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  .nav-list {
    display: flex;
    /*align-items: center;*/
    padding-bottom: px2rem(30px);
    box-shadow:0 0 px2rem(8px) rgba(222, 222, 222, 1);
  }
  .nav-item {
    flex-grow: 1;
    text-align: center;
    .icon {
      display: block;
      position: relative;
      width: px2rem(99px);
      height: px2rem(99px);
      margin: px2rem(20px) auto px2rem(17px);
      border-radius: px2rem(50px);
    }
    .icon-0 {
      background: linear-gradient(to left, #fecb6e, #ffc255);
      & > img {
        width: px2rem(40px);
        height: px2rem(64px);
      }
    }
    .icon-1 {
      background: linear-gradient(to left, #fd757b, #ff6067);
      & > img {
        width: px2rem(53px);
        height: px2rem(53px);
      }
    }
    .icon-2 {
      background: linear-gradient(to left, #5bb2f3, #449fec);
      & > img {
        width: px2rem(52px);
        height: px2rem(53px);
      }
    }
    .icon-3 {
      background: linear-gradient(to left, #29d48a, #1bcd8b);
      & > img {
        width: px2rem(49px);
        height: px2rem(49px);
      }
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .text { color: #333; font-size: px2rem(23.8px); }
  }
</style>
