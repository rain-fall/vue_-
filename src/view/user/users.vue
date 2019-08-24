<template>
  <div class="users">
    <!-- 面包屑部分 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框部分 -->
    <div style="margin-top: 15px;">
      <!-- 可通过slot来指定在Input中前置或者后置内容 -->
      <el-input placeholder="请输入内容" class="input-with-select" style="width:300px;margin-right:10px"
      v-model="userobj.query"
      @keydown.enter.native="init">
        <el-button slot="append" icon="el-icon-search" @click="init"></el-button>
      </el-input>
      <!-- 按钮 -->
      <el-button type="success">添加用户</el-button>
    </div>
    <!-- 表格展示区域 -->
    <template>
      <el-table
        ref="singleTable"
        :data="userList"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%" border
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="username" label="姓名" width="240"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="240"></el-table-column>
        <el-table-column prop="mobile" label="电话" width="240"></el-table-column>
        <el-table-column  label="用户状态" width="200">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- 数据插槽 -->
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <el-button class="editbtn iconfont icon-bianji"  @click="handleEdit(scope.$index, scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top">
              <el-button class="editbtn iconfont icon-caozuo-fenxiang"  @click="handleOperation(scope.$index, scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button class="editbtn iconfont icon-shanchu"  @click="handleDelete(scope.$index, scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- 分页区域 -->
    <template>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="userobj.pagenum"
          :page-sizes="[5, 5, 5, 5]"
          :page-size="userobj.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
import { getAllUsers } from '@/API/user_index.js'
export default {
  data () {
    return {
      total: 0,
      status: true,
      userList: [],
      userobj: {
        query: '',
        pagenum: 1,
        pagesize: 2
      }
    }
  },
  methods: {
    // 切换页码
    handleCurrentChange (val) {
      this.userobj.pagesize = val
      this.init()
    },
    // 切换页数
    handleSizeChange (val) {
      this.userobj.pagesize = val
      this.init()
    },
    // 获取列表数据
    init () {
      getAllUsers(this.userobj)
        .then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            this.userList = res.data.data.users
            // 获取总记录数
            this.total = res.data.data.total
          } else if (res.data.meta.status === 400) {
            this.$message.error(res.data.meta.msg)
            this.$router.push({ name: 'login' })
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    getAllUsers(this.userobj)
      .then(res => {
        if (res.data.meta.status === 200) {
          this.userList = res.data.data.users
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style scoped>
</style>
