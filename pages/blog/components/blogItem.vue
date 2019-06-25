<template>
  <article class="box">
    <nuxt-link :to="'/blog/content?id='+blog.id">
      <div class="head">
        <img :src="blog.cover" alt srcset>
      </div>
      <div class="body">
        <div class="nav"></div>
        <div class="desc">
          <h3>{{blog.title}}</h3>
          <div class="desc-text" style="-webkit-box-orient: vertical;">{{blog.description}}</div>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  props: {
    blog: Object
  }
};
</script>
<style lang="scss" scoped>
.box {
  display: inline-block;
  width: 300px;
  height: 300px;
  margin-right: 20px;
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
        width: 300px;
        height: 80px;
        color: #737475;
        display: -webkit-box;
        -webkit-line-clamp: 4;

        overflow: hidden;
      }
    }
  }
}
</style>
