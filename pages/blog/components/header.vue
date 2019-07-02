<template>
  <header class="header">
    <a class="logo" href="#">spark's blog</a>
    <!-- <s-input class="search-input"></s-input> -->
    <div class="search-box">
      <div @click="search" class="icon-box">
        <i class="iconfont iconsearch"></i>
      </div>
      <div class="input-box">
        <input v-model="text" class="search-input" type="text" />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    search() {
      this.$emit("search", this.text);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  background: #fff;
  .logo {
    float: left;
    margin-left: 100px;
  }
  .search-box {
    float: right;
    margin-right: 100px;
    margin-top: 8px;
    position: relative;
    .icon-box {
      position: relative;
      background: #7392db;
      border-radius: 50%;
      cursor: pointer;
      z-index: 100;
      width: 46px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      .iconsearch {
        color: #fff;
        font-size: 24px;
      }
    }
    .input-box {
      position: absolute;
      right: 23px;
      top: 0;
      height: 46px;
      background: #7392db;
      border-radius: 23px 0 0 23px;
      width: 0;
      transition: width 0.5s;
      overflow: hidden;
      .search-input {
        position: absolute;
        left: 0;
        width: 154px;
        height: 46px;
        background: transparent;
        padding: 0 20px;
        font-size: 16px;
        color: #fff;
        outline: none;
        border: none;
      }
    }
    &:hover {
      .input-box {
        width: 200px;
      }
    }
  }
}
</style>
