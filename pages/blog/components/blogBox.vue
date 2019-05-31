<template>
  <div class="box">
      <BlogItem v-for="item in 15" :key="item" />
  </div>
</template>
<script>
import BlogItem from "./blogItem";
export default {
  components: {
    BlogItem
  }
};
</script>
<style lang="scss" scoped>
.box {
  margin-top: 10px;
}
</style>
