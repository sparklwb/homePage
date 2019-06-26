<template>
  <article>
    <div class="outer-box">
      <img :src="blogData.cover" style="width:100%;" :alt="blogData.title">
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
.outer-box {
  margin: 0 auto;
  width: 800px;
  .right-box{
    font-size:14px;
  }
}
@media screen and (min-width: 1200px) {
  .outer-box {
    width: 1000px;
  }
}
</style>
