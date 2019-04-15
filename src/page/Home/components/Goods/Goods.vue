<template>
  <div class="Goods">
    <div class="city-wrapper">
      <el-row class="head">
        <el-col :xs="24" :sm="18" class="title">商品管理</el-col>
        <el-col :xs="24" :sm="6" class="serach">
          <el-autocomplete
            class="inline-input"
            v-model="keywords"
            :fetch-suggestions="querySearch"
            placeholder="搜索商品"
            :trigger-on-focus="false"
            size="mini"
          >
            <template slot-scope="{ item }">
              <div class="fetchitem" @click="checkCity(item.describe)">{{ item.describe }}</div>
            </template>
          </el-autocomplete>
        </el-col>
      </el-row>
      <el-table class="city-list"
                :data="productIndex"
                style="width: 100%">
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="名称"
          prop="title">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="describe">
        </el-table-column>
        <el-table-column
          label="价格￥"
          prop="pricea">
        </el-table-column>
        <el-table-column
          label="图片"
          prop="imgBanner">
          <template slot-scope="scope">
            <div class="img-wrapper">
              <img v-lazy="BASE_URL+scope.row.banner" alt="" :key="BASE_URL+scope.row.banner">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="编辑"
          align="left">
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
          显示 1 到 5 项，共 {{filterCity.length?productIndex.length:product.length}} 项
        </div>
        <div class="back" @click="shouAll">
          查看全部
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            :page-size="pageSize"
            @current-change="currentChange"
            :total="filterCity.length?productIndex.length:product.length">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <ShowGoodsEdit ref="showCity" :editData="editData"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShowGoodsEdit from '../../../../components/ShowGoodsEdit/ShowGoodsEdit'

export default {
  name: 'Goods',
  components: { ShowGoodsEdit },
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
    ...mapState(['product']),
    productIndex () {
      if (this.filterCity.length) {
        return this.filterCity
      } else {
        const product = this.product
        const arr = product.slice((this.index - 1) * 5, this.index * 5)
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
      const restaurants = this.product
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.describe.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    checkCity (val) {
      const arr = []
      this.product.forEach(item => {
        if (item.describe === val) {
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
  @import "Goods";
</style>
