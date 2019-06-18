<template>
  <div class="box">
    <div class="tool-bar">
      <div class="tool-icon">
        <Upload action=" " :show-upload-list="false" :before-upload="beforeUploadImg">
          <Icon type="md-image"/>
        </Upload>
      </div>
      <div class="tool-icon" style="float:right">
        <Icon type="md-send"/>
      </div>
      <div class="tool-icon" style="float:right;margin-right:10px;">
        <Select v-model="tag" multiple style="width:220px">
          <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
        </Select>
      </div>
    </div>
    <div class="md-box">
      <div class="left-box">
        <no-ssr placeholder="Codemirror Loading...">
          <codemirror ref="myCm" @input="inputCode" v-model="code"></codemirror>
        </no-ssr>
      </div>
      <div class="right-box">
        <div v-html="mdHtml"></div>
      </div>
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
      mdHtml: "",
      tag: "dddd"
    };
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
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
        document.querySelectorAll(".right-box blockquote").forEach(block => {
          hljs.highlightBlock(block);
        });
        document.querySelectorAll(".right-box code").forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    },
    async beforeUploadImg(file) {
      const formdata = new FormData();
      formdata.append("file", file);
      const res = await this.$api.upload(formdata);
      if (res) {
        const cursorPos = this.codemirror.getCursor();
        this.codemirror.replaceRange(
          `![${file.name.split(".")[0]}](http://blogcdn.sparklv.cn/${
            file.name
          })`,
          cursorPos
        );
      }
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100;
  overflow: auto;
}
.tool-bar {
  padding: 10px 30px;
  box-sizing: border-box;
  height: 54px;
  line-height: 34px;
  border-bottom: 2px solid #e3e4e5;
  .tool-icon {
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
  }
}
.md-box {
  width: 100%;
  display: flex;
  .left-box,
  .right-box {
    flex: 1;
    height: 100vh;
    font-size: 14px;
    padding: 20px 30px;
    overflow: auto;
  }
  .left-box {
    border-right: 2px solid #e3e4e5;
  }
}
</style>
