<template>
  <div class="ShowUsersEdit">
    <transition name="slideup">
      <div class="edit" v-if="!close">
        <el-form :model="cityData" ref="cityData" label-wnameth="80px" class="demo-ruleForm"
                 label-position="left">
          <el-form-item
            label="用户名"
            prop="name"
            :rules="[
      { required: true, message: 'ID不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.name" autocomplete="off" :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="pwd"
            :rules="[
      { required: true, message: '密码不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.pwd" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="头像"
            prop="avatar"
            :rules="[
      { required: true, message: '请上传图片'},
    ]"
          >
            <el-upload
              class="upload"
              action="#"
              :show-file-list="false"
              :on-change="handleBanner"
              :auto-upload="false"
              list-type="picture">
              <el-button size="small" type="primary" class="btn">点击上传</el-button>
              <div class="img">
                <img :src="avatar" alt="" class="img-content">
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.prevent="submitForm()">提交</el-button>
          </el-form-item>
        </el-form>

      </div>
    </transition>
    <div class="mark" @click="close = true" v-if="!close"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowUsersEdit',
  props: {
    userinfo: Object
  },
  data () {
    return {
      cityData: {
        name: '',
        pwd: '',
        avatar: {}
      },
      updateNumber: 1,
      BASE_URL: 'http://admin.yangsss.xyz/',
      avatar: '',
      close: true
    }
  },
  methods: {
    handleUrl (file) {
      this.cityData.avatar = file.raw
      let reader = new FileReader()
      reader.readAsDataURL(file.raw)
      const _this = this
      reader.onloadend = function () {
        let result = reader.result
        _this.avatar = result
      }
    },
    handleBanner (file) {
      this.cityData.avatar = file.raw
      let reader = new FileReader()
      reader.readAsDataURL(file.raw)
      const _this = this
      reader.onloadend = function () {
        let result = reader.result
        _this.avatar = result
      }
    },
    submitForm () {
      const cityData = this.cityData
      if (!(cityData.avatar instanceof File)) {
        cityData.avatar = ''
      }
      const data = new FormData()
      data.append('_id', this.userinfo._id)
      data.append('name', cityData.name)
      data.append('pwd', cityData.pwd)
      data.append('file', cityData.avatar)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post('/api/uploadfile', data, config).then(res => {
        if (res.status === 200) {
          this.$store.dispatch('reqInfo')
          // console.log(res)
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.close = true
        } else {
          this.$message({
            message: '错误',
            type: 'error'
          })
        }
      })
    }
  },
  watch: {
    userinfo: function (val) {
      const { name, pwd, avatar } = val
      this.cityData.name = name
      this.cityData.pwd = pwd
      this.avatar = this.BASE_URL + avatar
    }
  }
}
</script>

<style scoped lang="scss">
  @import "ShowUsersEdit";
</style>
