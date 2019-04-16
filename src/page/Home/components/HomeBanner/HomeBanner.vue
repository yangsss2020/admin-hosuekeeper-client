<template>
  <div class="HomeBanner">
    <div class="city-wrapper">
      <div class="head">首页banner管理</div>
      <el-table class="city-list"
                :data="homeBanner"
                style="width: 100%">
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="desc">
        </el-table-column>
        <el-table-column
          label="图标管理"
          min-width="170px"
          class="img"
        >
          <template slot-scope="scope">
            <div class="img-wrapper">
              <img v-lazy="BASE_URL+scope.row.imgUrl" alt="" :key="BASE_URL+scope.row.imgUrl">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="编辑"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <show-swiper-edit ref="showCity" :editData="editData"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShowSwiperEdit from '../../../../components/ShowSwiperEdit/ShowSwiperEdit'

export default {
  name: 'HomeBanner',
  components: { ShowSwiperEdit },
  data () {
    return {
      BASE_URL: 'http://admin.yangsss.xyz',
      editData: {}
    }
  },
  computed: {
    ...mapState(['swiper']),
    homeBanner () {
      const swiper = this.swiper
      swiper.forEach(item => {
        item.desc = '互联科技'
      })
      return swiper
    }
  },
  methods: {
    handleEdit (index, row) {
      this.editData = row
      this.$refs.showCity.close = false
    }
  }
}
</script>
<style lang="scss">
  .HomeBanner {
    .el-table th, .el-table td {
      padding: 0 0;
    }

    .el-autocomplete-suggestion__wrap {
      padding: 0;
    }

    .fetchitem {
      font-size: 12px;
    }
  }

</style>
<style scoped lang="scss">
  @import "HomeBanner";
</style>
