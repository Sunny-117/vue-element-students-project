<template>
  <div class="home-container">
    <el-container>
      <el-aside width="200px">
        <div class="aside-avatar">
          <Avatar />
        </div>
        <div class="nav-link">
          <router-link to="/"> 学生列表 </router-link>
          <router-link to="/"> 新增学生 </router-link>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Avatar from "../../components/Avatar";
export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.el-header,
.el-footer {
  background-color: #1267d6;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  //   background-color: rgb(5, 18, 34);
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  .aside-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    height: 100px;
    display: flex;
    flex-direction: column;
    a {
      border: 1px solid;

      color: red;
      text-decoration: none;
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>