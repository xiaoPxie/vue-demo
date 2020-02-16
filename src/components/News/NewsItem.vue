<template>
  <section class="news-item">
    <div class="warp-l">
      <p class="title multiline-text">{{newsInfo.title}}</p>
      <p class="time text-nowrap">发表时间： {{newsInfo.date}}</p>
    </div>
    <div class="warp-r">
      <img :src="newsInfo.imgUrl" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'news-item',
    props: {
      newsInfo: Object
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";
  .news-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: px2rem(30px);
    box-shadow: 0 px2rem(4px) px2rem(10px) rgba(0, 0, 0, 0.2);
  }
  .warp-l {
    flex-grow: 1;
    padding: 0 px2rem(10px);
    font-size: px2rem(30px);
    color: #333;

    .time {
      margin-top: px2rem(15px);
      font-size: px2rem(24px);
      color: #ccc;
    }
  }
  .warp-r {
    position: relative;
    min-width: px2rem(230px);
    height: px2rem(152px);
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 100%;
    }
  }

</style>
