<template>
  <div class="ShowCityEdit">
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
            label="地区"
            prop="name"
            :rules="[
      { required: true, message: '地区不能为空'},
    ]"
          >
            <el-input type="age" v-model.number="cityData.name" autocomplete="off"></el-input>
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
            label="图标"
            prop="imgUrl"
            :rules="[
      { required: true, message: '请上传图片'},
    ]"
          >
            <el-upload
              class="upload"
              action="#"
              :auto-upload="false"
              :show-file-list="false"
              :on-change="handleUrl"
              list-type="picture">
              <el-button size="small" type="primary" class="btn">点击上传</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              <div class="img">
                <img :src="imgUrl" alt="" class="img-content">
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item
            label="图标"
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
                <img :src="imgBanner" alt="" class="img-content">
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
  name: 'ShowCityEdit',
  props: {
    editData: Object
  },
  data () {
    return {
      cityData: {
        id: '',
        name: '',
        describe: '',
        imgUrl: {},
        imgBanner: {}
      },
      updateNumber: 1,
      BASE_URL: 'http://admin.yangsss.xyz/',
      imgUrl: 'http://localhost:8080/img/avatar1.4e4a33ad.jpg',
      imgBanner: 'http://localhost:8080/img/avatar1.4e4a33ad.jpg',
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
      this.cityData.imgBanner = file.raw
      let reader = new FileReader()
      reader.readAsDataURL(file.raw)
      const _this = this
      reader.onloadend = function () {
        let result = reader.result
        _this.imgBanner = result
      }
    },
    // icobeforeupload (file) {
    //   // this.numberValidateForm.imgUrl.push(file)
    //   // console.log(file)
    //   // let fromData = new
    //   // FormData()
    //   // fromData.append('file', file)
    //   // fromData.append('name', '1111111111111')
    //   // // const result = await uploadfile(fromData)
    //   // let config = {
    //   //   headers: {
    //   //     'Content-Type': 'multipart/form-cityData'
    //   //   }
    //   // }
    //   // axios.post('/api/uploadfile', fromData, config).then(res => {
    //   //   console.log(res)
    //   // })
    //   // console.log(result)
    //   return false
    // },
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
      const { id, name, describe, imgUrl, imgBanner } = val
      this.cityData.id = id
      this.cityData.name = name
      this.cityData.describe = describe
      this.imgUrl = this.BASE_URL + imgUrl
      this.imgBanner = this.BASE_URL + imgBanner
    }
  }
}
</script>

<style scoped lang="scss">
  @import "ShowCityEdit";
</style>
