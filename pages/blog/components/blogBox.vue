<template>
  <div class="box">
    <BlogItem v-for="item in blogList" :key="item.id" :blog="item" />
  </div>
</template>
<script>
import BlogItem from "./blogItem";
export default {
  props: {
    blogList: Array
  },
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
