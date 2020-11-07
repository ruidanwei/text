<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="设备名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="数据"
      prop="high">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button  size="mini" @click="dialogTableVisible = true">More</el-button>

<el-dialog title="设备" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="设备名" width="200"></el-table-column>
    <el-table-column property="high" label="温度"></el-table-column>
  </el-table>
</el-dialog>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2020-11-02',
          name: 'abc',
          high: '41'
        }, {
          date: '2020-11-02',
          name: 'ddd',
          high: '33'
        }, {
          date: '2020-11-02',
          name: 'eee',
          high: '30'
        }, {
          date: '2020-11-02',
          name: 'rdd',
          high: '22'
        }],
         gridData: [{
          date: '2016-05-02',
          name: 'aaa',
          high: '33'
        }, {
          date: '2016-05-04',
          name: 'aaa',
          high: '44'
        }, {
          date: '2016-05-01',
          name: 'aaa',
          high: '21'
        }, {
          date: '2016-05-03',
          name: 'aaa',
          high: '34'
        }], dialogTableVisible: false,
       
        formLabelWidth: '120px'
,
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
