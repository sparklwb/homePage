<template>
  <article class="box">
    <div class="head">
      <img src="https://img.alicdn.com/tfs/TB106aubntYBeNjy1XdXXXXyVXa-900-500.jpg" alt srcset>
    </div>
    <div class="body">
      <div class="nav"></div>
      <div class="desc">
        <h3>G3D —— Hybrid 环境下的 WebGL</h3>
        <div
          class="desc-text"
        >G3D 是一款基于 WebGL 的 JavaScript 3D 渲染引擎，借助 GCanvas，G3D 可以运行在 Weex，ReactNative 等 hybrid 环境下。G3D 由淘宝终端团队推出，并于 2018 年 3 月与 GCanvas 同我们是谁？我们是淘宝终端技术与基础业务团队，包含 前端、客户端、后端 三个团队有 150+ 同学。 前端团队我们负责：导购业务、内容业务、商家业务、基础交易业务、创新业务、店铺</div>
      </div>
    </div>
  </article>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.box {
  width: 300px;
  height: 300px;
  .head {
    width: 300px;
    height: 150px;
    overflow: hidden;
    img {
      width: 300px;
    }
  }
  .body {
    width: 300px;
    height: 150px;
    .nav {
      width: 300px;
      height: 30px;
    }
    .desc {
      width: 300px;
      height: 120px;
      overflow: hidden;
      .desc-text {
        margin-top: 15px;
        line-height: 20px;
        font-weight: 300;
        color: #737475;
      }
    }
  }
}
</style>
