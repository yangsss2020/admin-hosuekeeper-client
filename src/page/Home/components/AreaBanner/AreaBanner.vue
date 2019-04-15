<template>
    <div class="AreaBanner">
      <div class="city-wrapper">
        <div class="head">地区banner管理</div>
        <el-table class="city-list"
                  :data="tableData"
                  style="width: 100%">
          <el-table-column
            label="ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="描述"
            prop="describe">
          </el-table-column>
          <el-table-column
            label="图标管理"
            class="img"
          >
            <template slot-scope="scope">
              <img src="../../img/01.jpg" alt="">
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
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AreaBanner',
  data () {
    return {
      tableData: [{
        id: '001',
        name: '重庆',
        describe: '现代城市',
        icoUrl: '../../img/avatar1.jpg',
        imgBanner: '上海市普陀区金沙江路 1518 弄'
      }],
      keywords: ''
    }
  },
  methods: {
    handleEdit (index, row) {
    },
    handleDelete (index, row) {
    }
  }
}
</script>

<style scoped lang="scss">
@import "AreaBanner";
</style>
