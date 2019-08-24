<template>
    <div class="home">
    <el-container>
    <el-aside width="200px">

      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <img src='../assets/logo.png' class="logo"/>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span >用户管理</span>
        </template>
        <!-- index 唯一菜单子项标识 -->
          <el-menu-item index="/home/users" class="iconfont icon-fenlei1">
            <template slot="title">
              <span>用户列表</span>
            </template>
          </el-menu-item>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="2-1">用户列表
          </el-menu-item>
           <el-menu-item index="2-2">用户列表
          </el-menu-item>
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

    </el-aside>
    <el-container>
      <el-header>
        <span class="toggle-btn iconfont icon-39"></span>
        <h2 class="system-title">电商管理系统</h2>
        <a href="javascript" class="welcome">退出</a>
      </el-header>
      <!-- 主要内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      </el-container>
    </el-container>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height:60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292CF;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome{
    color: white;
  }
}
</style>
