
<template>
  <section class="recommend-wrap">
    <div class="wrap-title">
      <span class="icon"></span>
      <span class="text">火热推荐</span>
      <a class="more-btn" href="javascript:void(0)">更多 >></a>
    </div>
    <div class="shop-list">
      <div class="shop-item"">
        <a href="javascript:void(0)">
          <img class="shop-img" src="/static/images/shop01.png" alt="">
        </a>
        <div class="shop-detail">
          <span class="title">新鲜国际进口千图海外希腊甘甜爽口草莓（包邮）</span>
          <span class="label">最新</span>
          <span class="label">满减</span>
        </div>
        <div class="price-panel">
          <div class="discount">
            <span>满60元立减25元送200积分</span>
          </div>
          <span class="price">￥38元+68积分</span>
        </div>
        <a class="buy-btn" href="javascript:void(0)">立即购买</a>
      </div>
    </div>
  </section>
</template>

<script>

  var dataList = [
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry01@3x.webp", text: "热销专区"},
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry02@3x.webp", text: "限时抢购"},
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry03@3x.webp", text: "分类管理"},
    {url: "http://www.baidu.com", "imgUrl": "/static/images/entry04@3x.webp", text: "礼品中心"}
  ]

  export default {
    name: 'recommend',
    data() {
      return{
        dataList: dataList
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";

  .recommend-wrap {
    position: relative;
    padding-top: px2rem(20px);
    text-align: center;
  }
  .recommend-wrap > .wrap-title {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: px2rem(40px);
    color: #ffa423;
    & > .icon {
      display: block;
      width: px2rem(23px);
      height: px2rem(23px);
      margin-right: px2rem(10px);
      background: url("../../assets/images/@3x/commend-icon@3x.webp") no-repeat;
      background-size: contain;
    }
    & > .text {
      font-size: px2rem(19.44px);
      font-weight: 700;
    }
    & > .more-btn {
      position: absolute;
      right: px2rem(26px);
      font-size: px2rem(15.27px);
      color: #999;
      -webkit-transform: scale(.675);
    }
  }
  .shop-list {
    display: flex;
    align-items: center;
    border: px2rem(1px) solid #f3f3f3;
  }
  .shop-item {
    /*width: 33.333333vmin;*/
    /*width: px2rem(254px);*/

    & .shop-img {
      max-width: 100%;
      height: auto;
    }
    & > .shop-detail {

    }
    & > .price-panel {

    }
  }
  .shop-detail > .title {
    font-size: px2rem(12.5px);
    color: #5d5d5d;
  }
  .price-panel > .discount {
    display: block;
    width: px2rem(124px);
    /*width: 100%;*/
    /*padding: px2rem(5px);*/
    color: #fffefe;
    background: #ed4721;
    & > span {
      display: inline-block;
      width: 100%;
      font-size: px2rem(9.27px);
      -webkit-transform: scale(.675);
    }
  }
  .price-panel > .price {
    font-size: px2rem(13.89px);
    color: #ed4721;
  }
</style>
