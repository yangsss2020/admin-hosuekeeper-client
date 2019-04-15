<template>
  <div class="MainPerson">
    <el-row class="person-list">
      <el-col :sm="24" :lg="16" class="list-item">
        <el-timeline class="timetodo">
          <el-timeline-item timestamp="2019/4/1" placement="top" icon="el-icon-more"  color="#0bbd87" type="primary">
            <el-card>
              <h4 class="time-title">生产环境搭建</h4>
              <p class="desc">管理员 提交于 2019/4/1 </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/2" placement="top">
            <el-card>
              <h4 class="time-title">网站静态页面</h4>
              <p class="desc">管理员 提交于 2019/4/2</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/3" placement="top">
            <el-card>
              <h4 class="time-title">网站数据交互</h4>
              <p class="desc">管理员 提交于 2019/4/3</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/4" placement="top">
            <el-card>
              <h4 class="time-title">网站上线</h4>
              <p class="desc">管理员 提交于 2019/4/4</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :sm="24" :lg="8" class="list-item right">
        <el-card class="backlog" >
          <el-row class="person-info">
            <a href="#" class="avatar">
              <img src="../../../img/avatar1.jpg" alt="" class="img">
            </a>
            <div class="info">
              <h3 class="name">ys</h3>
              <p class="post">web工程师</p>
            </div>
          </el-row>
          <div class="item border-top">
            <i class="el-icon-news ico"></i>
            <span class="center">生产环境搭建</span>
            <div class="number">2</div>
          </div>
          <div class="item border-top">
            <i class="el-icon-news ico"></i>
            <span class="center">网站静态页面</span>
            <div class="number">2</div>
          </div>
          <div class="item border-top">
            <i class="el-icon-news ico"></i>
            <span class="center">网站数据交互</span>
            <div class="number">2</div>
          </div>
          <div class="item border-top">
            <i class="el-icon-news ico"></i>
            <span class="center">网站上线</span>
            <div class="number">2</div>
          </div>
          <div class="item border-top">
            <i class="el-icon-news ico"></i>
            <span class="center">后期维护</span>
            <div class="number">2</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainPerson'
}
</script>

<style scoped lang="scss">
  @import "MainPerson";
</style>
