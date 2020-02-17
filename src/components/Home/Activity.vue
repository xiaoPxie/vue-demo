
<template>
  <div class="activity-swiper" id="activity-swiper">
    <h3 class="title">
      <span></span>限时活动
    </h3>
    <div class="activity-list" v-if="reRender">
      <swiper :options="activitySwiperOption" v-if="dataList.length>1" ref="activity_swiper">
        <swiper-slide v-for="(item,index) in dataList" :key="index">
          <a v-for="(childItem, childIndex) in item" class="activity-item" :class="childItem.className" :href="childItem.url">
            <div class="num-panel">
              <span class="icon"></span>
              <span class="num">{{ childItem.joinNum }} 人参与</span>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div class="activity-swiper-pagination"></div>
    </div>
  </div>
</template>

<script>

  // json数据
  let dataObj = {
    "data": [
      {"url": "http://www.baidu.com1", "joinNum": "1213123", "className": "icon-1"},
      {"url": "http://www.baidu.com2", "joinNum": "2435435", "className": "icon-2"},
      {"url": "http://www.baidu.com3", "joinNum": "323423", "className": "icon-3"},
      {"url": "http://www.baidu.com4", "joinNum": "4566634", "className": "icon-3"},
      {"url": "http://www.baidu.com5", "joinNum": "52342", "className": "icon-2"},
      {"url": "http://www.baidu.com1", "joinNum": "1234234", "className": "icon-1"},
    ]
  }
  // 格式化json，以便能适应轮播组件
  let newDataList = [];
  let temp = [];
  for(let i=0; i<dataObj.data.length; i++) {
    if(i!==0 && i%3===0){
      newDataList.push(temp);
      temp = [];
      temp.push(dataObj.data[i]);
    }else {
      temp.push(dataObj.data[i]);
    }
    if(i === dataObj.data.length-1){
      newDataList.push(temp)
      break;
    }
  }

  export default {
    name: 'activity',
    data() {
      return{
        dataList: newDataList,
        activitySwiperOption: {//swiper3
          autoplay: 1500,
          autoplayDisableOnInteraction : false,
          speed: 500,
          loop: true,
          pagination: '.activity-swiper-pagination',
          // slidesPerView : 3,  //轮播中能看到的slide个数
          // slidesPerGroup : 3, // 3个slide为一组
          spaceBetween: '4%',
        },
        reRender: true
      }
    },
    activated() {
      this.reRender = false;
      setTimeout(() => {
        this.reRender = true;
      }, 100);
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";

  .activity-swiper {
    position: relative;
    /*height: px2rem(230px);*/
    margin-top: px2rem(10px);
    box-shadow:0 0 px2rem(8px) rgba(222, 222, 222, 1);
  }
  .activity-swiper > .title {
    display: flex;
    position: absolute;
    top: px2rem(22px);
    left: px2rem(42px);
    height: px2rem(24px);
    line-height: px2rem(24px);
    align-items: center;
    font-size: px2rem(20.83px);
    color: #333;
    z-index: 1;
    & > span {
      display: inline-block;
      width: px2rem(8px);
      height: 100%;
      margin-right: px2rem(14px);
      vertical-align: center;
      background: #429eec;
      border-radius: px2rem(5px);
    }
  }
  .activity-swiper > .activity-list {
    display: flex;
    align-items: center;
    margin: 0 px2rem(40px);
    height: px2rem(230px);
  }
  .activity-item {
    /*flex-grow: 1;*/
    display: inline-block;
    position: relative;
    min-width: px2rem(205px);
    min-height: px2rem(125px);
    margin-right: px2rem(20px);
    color: #fec5d2;
    font-size: px2rem(12.5px);
    background: url("../../assets/images/@3x/activity-back01@3x.png") no-repeat;
    background-size: contain;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    &.icon-1 {
      background: url("../../assets/images/@3x/activity-back01@3x.png") no-repeat;
      background-size: contain;
    }
    &.icon-2 {
      background: url("../../assets/images/@3x/activity-back03@3x.png") no-repeat;
      background-size: contain;
    }
    &.icon-3 {
      background: url("../../assets/images/@3x/activity-back03@3x.png") no-repeat;
      background-size: contain;
    }
    .num-panel {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      height: px2rem(40px);
      /*width: 100%;*/
      & > .icon {
        display: block;
        width: px2rem(19px);
        height: px2rem(18px);
        margin-left: px2rem(12px);
        background: url("../../assets/images/@3x/pernum@3x.webp") no-repeat;
        background-size: contain;
      }
    }
    .num {
      display: block;
      position: absolute;
      width: px2rem(180px);
      left: 0;
      -webkit-transform: scale(0.575);
    }
  }

  #activity-swiper /deep/ .swiper-container {
    margin-top: px2rem(40px);
  }
  #activity-swiper /deep/ .activity-swiper-pagination {
    position: absolute;
    top: px2rem(10px);
    right: 0;
    height: px2rem(30px);
    bottom: px2rem(24px);
    transform: translateX(-50%);
  }
  #activity-swiper /deep/ .swiper-slide {
    display: flex;
    justify-content: space-between;
  }
  #activity-swiper /deep/ .swiper-pagination-bullet {
    width: px2rem(10px);
    height: px2rem(9px);
    margin: 0 px2rem(2px);
    background: #000;
  }
  #activity-swiper /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #49a3ee;
  }

</style>
