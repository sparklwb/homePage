<template>
  <div class="box">
    <div v-if="!editShow">
      <Table :columns="columns" :data="tableData"></Table>
      <div class="pag">
        <Page :total="pag.total" show-total/>
      </div>
    </div>
    <Add @close="editShow=false" :editData="editData" v-else/>
  </div>
</template>
<script>
import Add from "./add";
export default {
  data() {
    return {
      editData: {},
      editShow: false,
      columns: [
        {
          title: "title",
          key: "title"
        },
        {
          title: "auth",
          key: "auth"
        },
        {
          title: "tags",
          key: "tags"
        },
        {
          title: "oper",
          render: (h, param) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: e => {
                      this.editData = param.row;
                      this.editShow = true;
                    }
                  }
                },
                "edit"
              )
            ]);
          }
        }
      ],
      tableData: [],
      pag: {
        pageSize: 20,
        pageNum: 1,
        total: 0
      }
    };
  },
  components: {
    Add
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    async getTableData(pag = this.pag) {
      const res = await this.$api.getBlogByPage(pag);
      if (res) {
        this.tableData = res.data.data;
        this.pag.total = res.data.total;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  padding: 20px;
}
.pag {
  text-align: right;
  margin: 20px;
}
</style>
