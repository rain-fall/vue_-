<template >
    <div class="login">
      <div class="container">
          <img src="../assets/avatar.jpg" alt class="avatar"/>
          <el-form
       :model="loginForm"
       :rules="rules"
       ref="loginForm"
        label-width="100px"
        class="demo-ruleForm">

  <el-form-item  prop="username">
    <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
   <el-form-item  prop="password">
    <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="login" >登录</el-button>
  </el-form-item>
</el-form>
      </div>
    </div>
</template>
<script>
// 引入接口方法
import { login } from '@/API/login_index.js'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      // 实现二次验证  当前表单.validate(里面是函数 valid)
      this.$refs.loginForm.validate((valid) => {
        // 两个参数 是否验证成功和未通过校验的字段
        if (valid) {
          login(this.loginForm).then((res) => {
            if (res.data.meta.status === 200) {
              // 在将服务器的数据返回给浏览器的时候，把数据本地保存
              localStorage.setItem('itcast_token', res.data.data.token)
              this.$router.push({ name: 'home' })
            }
          }).catch(() => {
            this.$message({
              message: '服务器异常，请稍后再试',
              type: 'err'
            })
          })
        } else {
          this.$message({
            message: '请输入所有必填数据',
            type: 'warning'
          })
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
   .login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
