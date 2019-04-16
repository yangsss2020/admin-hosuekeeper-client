<template>
  <div class="Home">
    <div class="container">
      <aside class="aside ">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :collapse="isCollapse" :router="true" :unique-opened="true"
                 background-color="#fff" menu-trigger="click" mode="horizontal "
                 text-color="#8a92a9" active-text-color="#4c5a80">
          <el-menu-item index="/home/main">
            <i class="iconfont ico">&#xe626;</i>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="/home/city">
            <i class="iconfont ico">&#xe687;</i>
            <span>区县管理</span>
          </el-menu-item>
          <el-menu-item index="/home/goods">
            <i class="el-icon-goods ico"></i>
            <span>商品管理</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-picture ico"></i>
              <span slot="title">banner管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/homebanner">首页banner</el-menu-item>
              <el-menu-item index="/home/areabanner">地区banner</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont ico">&#xe61a;</i>
              <span slot="title">用户列表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/userorder">用户订单</el-menu-item>
              <el-menu-item index="/home/useraddress">用户收货地址</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </aside>
      <div class="container" :class="{on:isCollapse}">
        <header class="header" :class="{on:isCollapse}">
          <div class="left">
            <el-button size="small" @click="isCollapse=!isCollapse">
              <i class="iconfont">&#xe607;</i>
            </el-button>
          </div>
          <div class="right">
            <div class="search hidden-xs-only">
              <el-autocomplete
                class="inline-input"
                v-model="keywords"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
                prefix-icon="el-icon-search"
                size="small"
              ></el-autocomplete>
            </div>
            <el-dropdown class="down" @command="handleCommand" trigger="click">
              <div class="person border">
                <img :src="BASE_URL+userinfo.avatar" alt="" class="avatar" v-if="userinfo.avatar">
                <span class="username">{{userinfo.name}}</span>
                <i class="el-icon-arrow-down ico"></i>
              </div>
              <el-dropdown-menu class="list">
                <el-dropdown-item class="item" icon="el-icon-setting" command="setting">
                  设置
                </el-dropdown-item>
                <el-dropdown-item class="item" icon="el-icon-warning" command="a">
                  退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </header>
        <main class="home-main">
          <transition name="el-fade-in" mode="out-in">
            <router-view/>
          </transition>
        </main>
      </div>
    </div>
    <show-users-edit ref="userset" :userinfo="userinfo"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { reqLogout } from '../../api/index'
import ShowUsersEdit from '@/components/ShowUsersEdit/ShowUsersEdit'
// import axios from 'axios'

export default {
  name: 'Home',
  components: { ShowUsersEdit },
  data () {
    return {
      isCollapse: true,
      restaurants: [], //搜索返回的数组
      keywords: '',
      BASE_URL: 'http://admin.yangsss.xyz/'

    }
  },
  methods: {
    querySearch (queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    handleSelect (item) {
      console.log(item)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    async handleCommand (command) {
      if (command === 'a') {
        await reqLogout()
        this.$router.replace('/login')
      }
      if (command === 'setting') {
        this.$refs.userset.close = false
      }
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  mounted () {
    //监听屏幕宽度
    this.$store.dispatch('reqProduct')
    this.$store.dispatch('reqSwiper')
    window.onresize = () => {
      if (document.documentElement.clientWidth < 768) {
        this.isCollapse = true
      } else {
        this.isCollapse = false
      }
    }
    //获取天气
  },
  activated () {
    this.$store.dispatch('reqArea')
    this.$store.dispatch('getallorder')
    this.$store.dispatch('getalluser')
    this.$store.dispatch('getallusers')
    this.$store.dispatch('getalladdress')
    this.$store.dispatch('reqInfo').then(() => {
      if (!this.userinfo.name) {
        this.$router.replace('/login')
      }
    })
  }
}
</script>
<style lang="scss">
  .el-dropdown-menu {
    width: 100px;
  }
</style>
<style scoped lang="scss">
  @import "home";

</style>
