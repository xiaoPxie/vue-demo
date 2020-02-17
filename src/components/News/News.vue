<template>
  <section class="news">
    <transition :name="transitionName">
      <keep-alive exclude="news-detail">
        <router-view class="news-child-view"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        transitionName: 'slide-left',
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  .news-child-view {
    position: absolute;
    top: 0;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
