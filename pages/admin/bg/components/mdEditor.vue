<template>
  <div class="box">
    <div class="left-box">
      <no-ssr placeholder="Codemirror Loading...">
        <codemirror @input="inputCode" v-model="code"></codemirror>
      </no-ssr>
    </div>
    <div class="right-box">
      <div v-html="mdHtml"></div>
    </div>
  </div>
</template>
<script>
import marked from "marked";
import hljs from "highlight.js";
export default {
  data() {
    return {
      code: "",
      mdHtml: ""
    };
  },
  methods: {
    inputCode(val) {
      this.code = val;
      this.setMdPre();
    },
    setMdPre() {
      this.mdHtml = marked(this.code);
      this.$nextTick(() => {
        hljs.initHighlightingOnLoad();
        // document.querySelectorAll("pre code").forEach(block => {
        //   hljs.highlightBlock(block);
        // });
        document.querySelectorAll(".right-box blockquote").forEach(block => {
          hljs.highlightBlock(block);
        });
        document.querySelectorAll(".right-box code").forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  .left-box,
  .right-box {
    flex: 1;
    height: 100vh;
    font-size:14px;
    padding:20px 30px;
  }
  .left-box {
    border-right: 3px solid #e3e4e5;
  }
}
</style>
