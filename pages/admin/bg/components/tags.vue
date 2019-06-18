<template>
  <div>
    <div class="oper-bar">
      <Button @click="showModal=true">新增</Button>
    </div>
    <div class="content"></div>
    <Modal
      v-model="showModal"
      draggable
      scrollable
      @on-ok="submit"
      :loading="addLoading"
      title="标签"
    >
      <Form ref="form" :model="form" :rules="rules" :label-width="80">
        <FormItem label="name" prop="name">
          <Input v-model="form.name"></Input>
        </FormItem>
        <FormItem label="bgcolor" prop="bgcolor">
          <ColorPicker v-model="form.bgcolor"/>
        </FormItem>
        <FormItem label="textcolor" prop="textcolor">
          <ColorPicker v-model="form.textcolor"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      addLoading: true,
      form: {
        name: "",
        bgcolor: "",
        textcolor: ""
      },
      rules: {
        name: [{ required: true, message: "必填", trigger: "blur" }],
        bgcolor: [{ required: true, message: "必选", trigger: "change" }],
        textcolor: [{ required: true, message: "必选", trigger: "change" }]
      }
    };
  },
  async mounted() {
    const res = await this.$api.getTagsByPage({ pageNum: 1, pageSize: 20 });
    if (res) {
      console.log(res);
    }
  },
  methods: {
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
      const res = await this.$api.addTags(this.form);
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
.oper-bar {
  padding: 10px 30px;
}
</style>
