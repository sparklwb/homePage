<template>
  <a :class="btnclass" @click="click">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "sButton",
  props: {
    type: String
  },
  computed: {
    btnclass() {
      const arr = ["s-btn"];
      arr.push(this.type);
      return arr;
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
<style scoped>
.s-btn {
  display: inline-block;
  padding: 14px 26px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
}
.s-btn.sblue {
  background: #4386fc;
  color: #fff;
}
.s-btn.sblue:hover {
  background: #3365ce;
}
</style>
