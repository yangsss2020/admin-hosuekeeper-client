<template>
  <div class="ShowGoodsEdit">
    <transition name="slideup">
      <div class="edit" v-if="!close">
        <el-form :model="cityData" ref="cityData" label-width="80px" class="demo-ruleForm"
                 label-position="left">
          <el-form-item
            label="ID"
            prop="id"
            :rules="[
      { required: true, message: 'ID不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.id" autocomplete="off"
                      :disabled="true"></el-input>
          </el-form-item>
          <el-form-item
            label="名称"
            prop="title"
            :rules="[
      { required: true, message: '地区不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="描述"
            prop="describe"
            :rules="[
      { required: true, message: '描述不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.describe" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="价格"
            prop="pricea"
            :rules="[
      { required: true, message: '描述不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.pricea" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="图片"
            prop="imgUrl"
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
                <img :src="banner" alt="" class="img-content">
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

export default {
  name: 'ShowGoodsEdit',
  props: {
    editData: Object
  },
  data () {
    return {
      cityData: {
        id: '',
        title: '',
        describe: '',
        pricea: '',
        banner: {}
      },
      updateNumber: 1,
      BASE_URL: 'http://admin.yangsss.xyz/',
      imgUrl: 'http://localhost:8080/img/avatar1.4e4a33ad.jpg',
      banner: 'http://localhost:8080/img/avatar1.4e4a33ad.jpg',
      close: true
    }
  },
  methods: {
    handleUrl (file) {
      this.cityData.imgUrl = file.raw
      let reader = new FileReader()
      reader.readAsDataURL(file.raw)
      const _this = this
      reader.onloadend = function () {
        let result = reader.result
        _this.imgUrl = result
      }
    },
    handleBanner (file) {
      this.cityData.banner = file.raw
      let reader = new FileReader()
      reader.readAsDataURL(file.raw)
      const _this = this
      reader.onloadend = function () {
        let result = reader.result
        _this.banner = result
      }
    },
    submitForm () {
      // const cityData = this.cityData
      // console.log(cityData)
      this.$message({
        message: '对不起，您没有权限!',
        type: 'warning'
      })
    }
  },
  watch: {
    editData: function (val) {
      const { id, title, describe, pricea, banner } = val
      this.cityData.id = id
      this.cityData.title = title
      this.cityData.describe = describe
      this.cityData.pricea = pricea
      // this.imgUrl = this.BASE_URL + imgUrl
      this.banner = this.BASE_URL + banner
    }
  }
}
</script>

<style scoped lang="scss">
  @import "ShowGoodsEdit";
</style>
