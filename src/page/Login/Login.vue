<template>
  <div class="Login">
    <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm" label-position="left"
             size="mini">
      <el-form-item
        label="用户名"
        prop="name"
        :rules="[
      { required: true, message: '用户名不能为空'},
    ]"
      >
        <el-input type="text" v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pwd"
        :rules="[
      { required: true, message: '密码不能为空'},
    ]"
      >
        <el-input type="password" v-model.number="numberValidateForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="msg">
        注意:未注册用户登录时会自动登录
      </el-form-item>
      <el-form-item class="submit-item">
        <el-button type="success" @click="submitForm('numberValidateForm')" class="submit" size="medium">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { register } from '../../api/index'

export default {
  name: 'Login',
  data () {
    return {
      numberValidateForm: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { name, pwd } = this.numberValidateForm
          const result = await register({ name, pwd })
          if (result.code === 0) {
            this.$store.dispatch('reqInfo')
            this.$router.replace('/home')
            // this.$message({
            //   message: result.msg,
            //   type: 'success'
            // })
          } else {
            this.$message.error(result.msg)
            return false
          }
        } else {
          this.$message.error('请填写正确的信息')
          return false
        }
      })
    }
  },
  async mounted () {
    // const result = await register()
    // console.log(result)
  }
}
</script>

<style lang="scss">
  /*text-align: center;*/
  .msg {
    /* color: $color-black-1;*/
    .el-form-item__content {
      font-size: 12px;
    }
  }
</style>
<style scoped lang="scss">
  @import "Login";
</style>
