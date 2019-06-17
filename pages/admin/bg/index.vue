<template>
  <div class="container">
    <Menu @on-select="selMenu" theme="light" width="200px" :active-name="nowActiveMenu">
      <div class="add-btn-box">
        <Button @click="selMenu('add')" shape="circle" icon="md-add" size="large">New</Button>
      </div>
      <!-- <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper"/>内容管理
      </template>-->
      <MenuItem name="1-1">文章管理</MenuItem>
      <!-- <MenuItem name="1-2">评论管理</MenuItem> -->
      <!-- <MenuItem name="1-3">举报管理</MenuItem> -->
      <!-- </Submenu> -->
      <!-- <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people"/>用户管理
        </template>
        <MenuItem name="2-1">新增用户</MenuItem>
        <MenuItem name="2-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats"/>统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>-->
    </Menu>
    <div class="content">
      <Add v-if="nowActiveMenu==='add'"/>
    </div>
  </div>
</template>
<script>
import Add from "./components/add";
export default {
  data() {
    return {
      nowActiveMenu: "1-1"
    };
  },
  components: {
    Add
  },
  methods: {
    selMenu(name) {
      this.nowActiveMenu = name;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  .content {
    flex: 1;
  }
}
.add-btn-box {
  padding: 20px 0 10px 20px;
}
</style>
