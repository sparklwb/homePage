<template>
  <div class="input-box">
    <input v-model="text" class="input" type="text">
  </div>
</template>
<script>
export default {
  name: "sInput",
  data() {
    return {
      text: "",
      canSet: true
    };
  },
  props: ["value"],
  watch: {
    value() {
      this.text = this.value;
    },
    text() {
      if (this.canSet) {
        this.$emit("input", this.text);
        this.canSet = false;
        this.$nextTick(() => {
          this.canSet = true;
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.input-box {
  width: 300px;
  .input {
    width: 100%;
    height: 35px;
    padding: 5px 10px;
    line-height: 35px;
    font-size: 14px;
    box-shadow: none;
    outline-style: none;
    border-radius: 4px;
    border: 1px solid #b3b4b5;
  }
}
</style>
