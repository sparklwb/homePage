<template>
  <article>
    <div class="img-box">
      <a class="logo" href="/blog">Geolic's Blog</a>
      <img :src="blogData.cover" style="width:100%;" :alt="blogData.title" />
      <div class="mask"></div>
      <div class="title-box">
        <h1 class="title">{{blogData.title}}</h1>
      </div>
    </div>
    <div class="outer-box">
      <div class="oper-bar"></div>
      <div class="md-box">
        <div class="right-box">
          <div v-html="mdHtml"></div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import api from "@/utils/api";
import marked from "marked";
import hljs from "highlight.js";
export default {
  data() {
    return {
      blogData: {},
      md: "",
      mdHtml: ""
    };
  },
  async asyncData({ query }) {
    const res = await api.getBlogById(query.id);
    const obj = res ? res.data[0] : {};
    return { blogData: obj };
  },
  mounted() {
    this.md = this.blogData.content;
    this.setHilightMd();
  },
  methods: {
    setHilightMd() {
      this.mdHtml = marked(this.md);
      this.$nextTick(() => {
        hljs.initHighlightingOnLoad();
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.img-box {
  position: relative;
  width: 100%;
  .logo {
    position: absolute;
    top: 20px;
    left: 100px;
    font-size: 26px;
    font-weight: 600;
    line-height: 60px;
    font-style: italic;
    color: #fff;
    z-index: 12;
  }
  .mask {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
  }
  .title-box {
    position: absolute;
    z-index: 12;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    .title {
      text-transform: uppercase;
      padding: 0 10%;
      line-height: 1.3;
      width: 100%;
      margin: 0 0 10px;
      color: #fff;
      font-weight: 600;
      letter-spacing: 5px;
      font-size: 36px;
    }
  }
}
.outer-box {
  margin: 0 auto 50px;
  width: 800px;
  .oper-bar {
    margin: 20px 0;
  }
  .right-box {
    font-size: 14px;
  }
}
@media screen and (min-width: 1200px) {
  .outer-box {
    width: 1000px;
  }
}
</style>
