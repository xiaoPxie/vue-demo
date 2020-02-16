<template>

    <div class="top-bar">
      <a href="javascript:void(0)" @click.prevent="$router.back(-1)">
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle" stroke="#2329D6" stroke-width="0.6666666666666666" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="chevronLeftIconTitle">Chevron Left</title> <polyline points="14 18 8 12 14 6 14 6"/> </svg>
      </a>
      <p class="title">
        <slot name="title">默认标题</slot>
      </p>
    </div>

</template>

<script>

  export default {
    name: 'top-bar',
    props: {

    },
    methods: {
      back(){
        if (window.history.length <= 1) {
          this.$router.push({path:'/'})
          return false
        } else {
          this.$router.go(-1)
        }
        //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
        //如果上面都执行了 页面都跳走了，这个也就不用管了
        setTimeout(() => {
          this.$router.push({path:'/'})
        },500)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  #top-bar {
    /*position: fixed;*/
    /*top: 0;*/
    width: 100%;
    background: #fff;
    z-index: 101;
  }

  .top-bar {
    display: flex;
    position: fixed;
    width: 100%;
    height: px2rem(80px);
    align-items: center;
    font-size: 0;
    background: #fff;
    box-shadow: 0 px2rem(2px) px2rem(10px) rgba(0, 0, 0, 0.3);
    z-index: 101;
    & > .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: px2rem(30px);
    }
  }
</style>
