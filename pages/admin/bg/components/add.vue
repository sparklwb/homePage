<template>
  <div>
    <Button v-if="editData" @click="close">Back</Button>
    <MdEditor :editData="editData"/>
  </div>
</template>
<script>
import MdEditor from "./mdEditor";
export default {
  data() {
    return {};
  },
  props: ["editData"],
  components: {
    MdEditor
  },
  mounted() {},
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
