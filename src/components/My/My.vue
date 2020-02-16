<template>
  <section class="my">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'my',
    data() {
      return {
        userInfo: {},
        hadData: false,
        transitionName: 'slide-left'
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
  .my {
    position: relative;
  }
  h3 {
    font-size: px2rem(34px);
  }
  p {
    font-size: px2rem(26px);
  }
  .panel {
    width: 80%;
    margin: px2rem(20px) auto 0;
    padding: px2rem(30px);
    @include border;
  }
  .bottom-panel {
    position: absolute;
    right: px2rem(20px);
    bottom: px2rem(120px);
  }

  .child-view {
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
