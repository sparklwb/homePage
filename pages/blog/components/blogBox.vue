<template>
  <div class="box">
      <BlogItem />
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
