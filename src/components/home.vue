<template>
    <div class="home">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户列表</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">权限列表</el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">权限列表</el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">权限列表</el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">权限列表</el-menu-item>
          <el-menu-item index="1-2">角色列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>
