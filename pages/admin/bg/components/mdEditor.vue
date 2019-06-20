<template>
  <div class="box">
    <div class="tool-bar">
      <div class="tool-icon">
        <Upload action=" " :show-upload-list="false" :before-upload="beforeUploadImg">
          <Icon type="md-image"/>
        </Upload>
      </div>
      <div class="tool-icon" style="float:right">
        <Icon type="md-send" @click="showModal = true"/>
      </div>
      <div class="tool-icon" style="float:right;margin-right:10px;">
        <Select v-model="tag" multiple style="width:250px">
          <Option v-for="item in tags" :value="item.id" :key="item.id">{{ item.name }}</Option>
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
    <Modal v-model="showModal" scrollable @on-ok="submit" :loading="addLoading" title="标签">
      <Form ref="form" :model="form" :rules="rules" :label-width="80">
        <FormItem label="title" prop="title">
          <Input v-model="form.title"/>
        </FormItem>
        <FormItem label="cover" prop="cover">
          <Upload action=" " :show-upload-list="false" :before-upload="beforeUploadCover">
            <Icon style="font-size:24px" type="md-image"/>
          </Upload>
        </FormItem>
        <FormItem v-if="form.cover" label=" ">
          <img style="width:200px" :src="form.cover">
        </FormItem>
        <FormItem label="description" prop="description">
          <Input v-model="form.description"/>
        </FormItem>
      </Form>
    </Modal>
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
      tag: [],
      tags: [],
      showModal: false,
      addLoading: true,
      form: {},
      rules: {}
    };
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  mounted() {
    this.getTags();
  },
  methods: {
    async getTags() {
      const res = await this.$api.getTags();
      if (res) {
        this.tags = res.data;
      }
    },
    inputCode(val) {
      this.code = val;
      this.setMdPre();
    },
    setMdPre() {
      this.mdHtml = marked(this.code, {
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
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
    },
    async beforeUploadCover(file) {
      const formdata = new FormData();
      formdata.append("file", file);
      const res = await this.$api.upload(formdata);
      if (res) {
        const path = `http://blogcdn.sparklv.cn/${file.name}`;
        this.$set(this.form, "cover", path);
      }
      return false;
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitRun();
        } else {
          this.addLoading = false;
          this.$nextTick(() => {
            this.addLoading = true;
          });
        }
      });
    },
    async submitRun() {
      const res = await this.$api.addBlog(
        Object.assign(this.form, {
          content: this.code,
          tags: this.tag.join(","),
          auth: "geolic"
        })
      );
      if (res) {
        this.showModal = false;
        this.$Message.success({
          content: "操作成功"
        });
      }
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
    width: 0;
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
