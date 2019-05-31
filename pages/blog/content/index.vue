<template>
  <article>
    <div class="outer-box">
      <img src="https://img.alicdn.com/tfs/TB106aubntYBeNjy1XdXXXXyVXa-900-500.jpg" style="width:100%;" alt srcset>
      <div v-html="mdHtml"></div>
    </div>
  </article>
</template>
<script>
import axios from "axios";
import marked from "marked";
import hljs from "highlight.js";
export default {
  asyncData(context) {
    return axios.get("ani.md").then(res => {
      return { md: res.data };
    });
  },
  data() {
    return {
      md: "",
      mdHtml: ""
    };
  },
  mounted() {
    this.mdHtml = marked(this.md);
    this.$nextTick(() => {
      hljs.initHighlightingOnLoad();
      document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.outer-box {
  margin: 0 auto;
  width: 800px;
}
@media screen and (min-width: 1200px) {
  .outer-box {
    width: 1000px;
  }
}
</style>
