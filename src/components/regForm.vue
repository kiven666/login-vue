<template>
  <div class="login-form">
    <div class="g-form-line">
      <span>用户名</span>
      <div class="g-form-input">
        <input type="text" v-model='userNameModel' placeholder="请输入用户名" autofocus>
      </div>
      <span class="error" v-if='userErrors.state'>{{userErrors.errorText}}</span>
    </div>
    <div class="g-form-input">
      <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
      <div class="g-form-input">
        <input type="password" placeholder="请输入登录密码" v-model='passwordModel'>
      </div>
      <span>{{passwordErrors.errorText}}</span>
    </div>

    <p>{{isTextError}}</p>
    <el-button type='primary' size='medium' icon='plain' @click='onLogin'>登录</el-button>

  </div>
</template>
<script>
export default {
  data (){
    return {
      isTextError:'',
      loginLoading:false,
      userNameModel:'',
      passwordModel:''
    }
  },
  computed :{
    userErrors (){
      let state,errorText;
      const reg = /^1\d{10}$/;
      if(reg.test(this.userNameModel)) {
        state = false;
        errorText = ''
      }else {
        state = true;
        errorText = '输入非法，请输入正确的手机号码';
      }
      return {
        state,
        errorText
      }
    },
    passwordErrors (){
      let state,errorText;
      const reg = /^[0-9,A-Z,a-z]{1,10}$/;
      if(reg.test(this.passwordModel)) {
        state = false;
        errorText = ''
      }else {
        state = true;
        errorText = '输入非法，请输入正确的密码';
      }
      if(!this.isPasswordFlag) {
        errorText = '';
        this.isPasswordFlag = true;
      }
      return {
        state,
        errorText
      }
    }
  }
}
</script>
<style scoped>
  .error {
    color: red;
    padding-left: 15px;
  }
</style>
