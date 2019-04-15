<template>
  <div class="MainNav">
    <el-row class="list">
      <el-col :xs="24" :sm="12" :lg="6" class="item">
        <el-card shadow="hover" class="card-item" :body-style="{ padding: '0px' }" >
          <div class="left">
            <i class="iconfont">&#xe655;</i>
          </div>
          <div class="right" @click="$router.push('/home/goods')">
            <h3 class="title">商品管理</h3>
            <p class="desc">{{allorder.length}}个商品待办理</p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6" class="item">
        <el-card shadow="hover" class="card-item" :body-style="{ padding: '0px' }">
          <div class="left">
            <i class="iconfont">&#xe655;</i>
          </div>
          <div class="right" @click="$router.push('/home/city')">
            <h3 class="title">地区管理</h3>
            <p class="desc">{{area.length}}个地区待办理</p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6" class="item">
        <el-card shadow="hover" class="card-item" :body-style="{ padding: '0px' }">
          <div class="left">
            <i class="iconfont">&#xe655;</i>
          </div>
          <div class="right" @click="$router.push('/home/homebanner')">
            <h3 class="title">banner管理</h3>
            <p class="desc">点击进入</p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6" class="item">
        <el-card shadow="hover" class="card-item" :body-style="{ padding: '0px' }">
          <div class="left">
            <i class="iconfont">&#xe655;</i>
          </div>
          <div class="right" @click="$router.push('/home/areabanner')">
            <h3 class="title">地区banner管理</h3>
            <p class="desc">点击进入</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    allorder: Array,
    area: Array
  },
  methods: {
    handle () {
    }
  }
}
</script>

<style scoped lang="scss">
  @import "MainNav";
</style>
