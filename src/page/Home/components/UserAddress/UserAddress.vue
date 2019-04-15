<template>
  <div class="UserAddress">
    <div class="city-wrapper">
      <el-row class="head">
        <el-col :xs="24" :sm="18" class="title">用户地址</el-col>
        <el-col :xs="24" :sm="6" class="serach">
          <el-autocomplete
            class="inline-input"
            v-model="keywords"
            :fetch-suggestions="querySearch"
            placeholder="搜索用户名"
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
                :data="alladdressIndex"
                style="width: 100%">
        <el-table-column
          width="300%"
          label="id"
          prop="_id">
        </el-table-column>
        <el-table-column
          label="用户名"
          prop="username">
        </el-table-column>
        <el-table-column
          label="收货人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="手机号"
          prop="tel">
        </el-table-column>
        <el-table-column
          label="收货地址"
          prop="address">
        </el-table-column>
        <el-table-column
          label="邮编"
          prop="code">
        </el-table-column>
        <el-table-column
          label="编辑"
          align="left">
          <!--<template slot="header" slot-scope="scope">-->
          <!--</template>-->
          <template slot-scope="scope">
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
          显示 1 到 10 项，共 {{filterCity.length?alladdressIndex.length:alladdress.length}} 项
        </div>
        <div class="back" @click="shouAll">
          查看全部
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            :page-size="pageSize"
            @current-change="currentChange"
            :total="filterCity.length?alladdressIndex.length:alladdress.length">
          </el-pagination>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserAddress',
  data () {
    return {
      tableData: [],
      BASE_URL: 'http://admin.yangsss.xyz/',
      keywords: '',
      index: 1,
      pageSize: 10,
      restaurants: [],
      filterCity: [], //搜索城市列表
      page: 'prev, pager, next',
      editData: {}
    }
  },
  computed: {
    ...mapState(['alladdress']),
    alladdressIndex () {
      if (this.filterCity.length) {
        return this.filterCity
      } else {
        const alladdress = this.alladdress
        const arr = alladdress.slice((this.index - 1) * 10, this.index * 10)
        return arr
      }
    }
  },
  methods: {
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
      const restaurants = this.alladdress
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
      this.alladdress.forEach(item => {
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
  .UserAddress {
    .el-table th, .el-table td {
      padding: 2px 0;
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
  @import "UserAddress";
</style>
