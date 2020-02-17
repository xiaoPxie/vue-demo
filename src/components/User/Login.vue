<template>
  <section class="login">
    <div class="login-container">
      <form action="">
        <div class="input-panel">
          <span class="">用户名：</span>
          <input type="text" v-model="user.username" name="username" placeholder="请输入用户名" required>
        </div>
        <div class="input-panel">
          <span class="">密码：</span>
          <input type="password" v-model="user.password" name="password" placeholder="请输入密码" required>
        </div>
        <a href="javascript:void(0)" @click.prevent="login()">Login</a>
      </form>
    </div>
  </section>
</template>

<script>
  import ApiPath from "../../apis/api-path";
  import api from "../../axios/ajax.js"

  export default {
    name: 'Login',
    data() {
      return {
        user: {
          username: "",
          password: "",
        }
      }
    },
    methods: {
      login: function () {
        api.post(ApiPath.user.login, this.user).then((res) => {
          console.group("用户登录数据接口返回")
          console.log(res)
          console.groupEnd()
          if(res.code === 1000){
            let userObj = {
              username: this.user.username,
              token: res.token
            }
            // sessionStorage.setItem("user", JSON.stringify(userObj))
            this.$cookies.set("user", userObj)
            this.$router.push('/my')
          }else{
            alert(res.message)
            return false;
          }
        }).catch((error) => {
          alert("登录失败！error code:1001")
          console.warn(error)
        })
      }
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/util";
  @import "../../assets/css/common/border.scss";

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  input,a {
    display: block;
    width: px2rem(650px);
    height: px2rem(112px);
    margin-bottom: px2rem(88px);
    line-height: px2rem(112px);
    outline: none;
    border: 0;
    border-bottom: 1px solid #a0a0a0;
  }
  input {
    font-size: px2rem(29.29px);
    color: #000;
  }
  a {
    font-size: px2rem(48.82px);
    text-align: center;
    background: #ea6060;
  }
  a:link {color: #fff;}
  a:hover {color: #fff;}
  .input-panel {
    position: relative;
  }
</style>
