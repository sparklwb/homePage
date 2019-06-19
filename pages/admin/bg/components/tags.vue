<template>
  <div class="outer-box">
    <div class="oper-bar">
      <Button @click="showModal=true">新增</Button>
    </div>
    <div class="content">
      <Table :columns="columns" :data="tableData"></Table>
    </div>
    <Modal v-model="showModal" scrollable @on-ok="submit" :loading="addLoading" title="标签">
      <Form ref="form" :model="form" :rules="rules" :label-width="80">
        <FormItem label="name" prop="name">
          <Input v-model="form.name"/>
        </FormItem>
        <FormItem label="bgcolor" prop="bgcolor">
          <ColorPicker v-model="form.bgcolor"/>
        </FormItem>
        <FormItem label="textcolor" prop="textcolor">
          <ColorPicker v-model="form.textcolor"/>
        </FormItem>
        <FormItem label="show">
          <Button :style="{color:form.textcolor,background:form.bgcolor}">{{form.name}}</Button>
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
      },
      columns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "textcolor",
          key: "textcolor"
        },
        {
          title: "bgcolor",
          key: "bgcolor"
        },
        {
          title: "example",
          render: (h, param) => {
            return h("div", [
              h(
                "Button",
                {
                  style: {
                    color: param.row.textcolor,
                    background: param.row.bgcolor
                  }
                },
                param.row.name
              )
            ]);
          }
        }
      ],
      tableData: []
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      const res = await this.$api.getTags();
      if (res) {
        this.tableData = res.data;
      }
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
      const res = await this.$api.addTags(this.form);
      if (res) {
        this.showModal = false;
        this.$Message.success({
          content: "操作成功"
        });
        this.getTableData();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.outer-box {
  margin: 0 20px;
}
.oper-bar {
  padding: 10px 0;
}
</style>
