<template>
  <div class="City">
    <div class="city-wrapper">
      <el-row class="head">
        <el-col :xs="24" :sm="18" class="title">城市管理</el-col>
        <el-col :xs="24" :sm="6" class="serach">
          <el-autocomplete
            class="inline-input"
            v-model="keywords"
            :fetch-suggestions="querySearch"
            placeholder="搜索城市"
            :trigger-on-focus="false"
            size="mini"
          >
            <template slot-scope="{ item }">
              <div class="fetchitem" @click="checkCity(item.name)">{{ item.name }}</div>
            </template>
          </el-autocomplete>
        </el-col>
      </el-row>
      <el-table class="city-list"
                :data="areaIndex"
                style="width: 100%">
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="地区"
          prop="name">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="describe">
        </el-table-column>
        <el-table-column
          label="图标管理"
          width="140px"
          class="img"
        >
          <template slot-scope="scope">
            <div class="img-wrapper1">
              <img v-lazy="BASE_URL+scope.row.imgUrl" :key="BASE_URL+scope.row.imgUrl" class="img1">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="banner图"
          width="200px"
          prop="imgBanner">
          <template slot-scope="scope">
            <div class="img-wrapper">
              <img v-lazy="BASE_URL+scope.row.imgBanner" alt="" :key="BASE_URL+scope.row.imgBanner">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="编辑"
          min-width="160px"
          align="left">
          <!--<template slot="header" slot-scope="scope">-->
          <!--</template>-->
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer">
        <div class="left">
          显示 1 到 5 项，共 {{filterCity.length?areaIndex.length:area.length}} 项
        </div>
        <div class="back" @click="shouAll">
          查看全部
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            :page-size="pageSize"
            @current-change="currentChange"
            :total="filterCity.length?areaIndex.length:area.length">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <ShowCityEdit ref="showCity" :editData="editData"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShowCityEdit from '@/components/ShowCityEdit/ShowCityEdit'

export default {
  name: 'City',
  components: { ShowCityEdit },
  data () {
    return {
      tableData: [],
      BASE_URL: 'http://admin.yangsss.xyz/',
      keywords: '',
      index: 1,
      pageSize: 5,
      restaurants: [],
      filterCity: [], //搜索城市列表
      page: 'prev, pager, next',
      editData: {}
    }
  },
  computed: {
    ...mapState(['area']),
    areaIndex () {
      if (this.filterCity.length) {
        return this.filterCity
      } else {
        const area = this.area
        const arr = area.slice((this.index - 1) * 5, this.index * 5)
        return arr
      }
    }
  },
  methods: {
    handleEdit (index, row) {
      this.editData = row
      this.$refs.showCity.close = false
    },
    handleDelete (index, row) {
      this.$message({
        message: '对不起，您没有权限!',
        type: 'warning'
      })
    },
    currentChange (index) {
      this.index = index
    },
    querySearch (queryString, cb) {
      const restaurants = this.area
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    checkCity (val) {
      const arr = []
      this.area.forEach(item => {
        if (item.name === val) {
          arr.push(item)
        }
      })
      this.filterCity = arr
    },
    shouAll () {
      this.filterCity = []
    }
  },
  mounted () {
    let clientWidth = document.documentElement.offsetWidth
    if (clientWidth < 470) {
      this.page = 'prev, next'
    } else {
      this.page = 'prev, pager, next'
    }
  }
}
</script>
<style lang="scss">
  .City {
    .el-table th, .el-table td {
      padding: 6px 0;
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
  @import "City";
</style>
