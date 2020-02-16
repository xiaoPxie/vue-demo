<template>
  <div id="sla">
    <TopBar :props-title="title">
      <span slot="title">服务协议</span>  <!-- 使用插槽 -->
    </TopBar>
    <section class="sla">
<!--      <h2>服务协议</h2>-->
      <p class="introduction">
        欢迎您使用xxx！我们珍视您在向我们提供您的个人信息时对我们的信任，我们将按照本隐私政策处理您的个人信息并保障您信息的安全。
      </p>
      <div class="content">
        <div class="content-title">引言</div>
        <p>本隐私政策所指的个人信息均不包括您使用的内容数据。</p>
        <p>请您务必认真阅读本隐私政策，在确认充分了解并同意后再使用百度网盘服务。</p>
        <div class="content-title">本隐私政策将帮助您了解以下内容：</div>
        <p>
          1. 我们如何收集和使用您的个人信息 <br>
          2. 我们如何使用 Cookie 和同类技术 <br>
          3. 我们如何共享、转让、公开披露您的个人信息 <br>
          4. 我们如何保存及保护您的个人信息 <br>
          5. 您的权利 <br>
          6. 我们如何处理未成年人的个人信息 <br>
          7. 您的个人信息如何在全球范围转移 <br>
          8. 隐私政策的修订 <br>
          9. 如何联系我们 <br>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  import TopBar from "../Common/TopBar";

  export default {
    name: 'sla',
    components: {
      TopBar
    },
    data() {
      return {
        title: '服务协议'
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  .sla {
    margin-top: px2rem(80px);
    padding: px2rem(20px);
  }
  h2 {
    font-size: px2rem(36px);
    text-align: center;
  }
  .introduction {
    margin: px2rem(20px) 0;
    font-size: px2rem(20px);
    background: #F6F6F6;
  }
  .content-title {
    margin: px2rem(20px) 0 px2rem(10px);
    font-size: px2rem(30px);
    font-weight: 700;
  }
  .content > p {
    font-size: px2rem(26px);
  }
</style>
