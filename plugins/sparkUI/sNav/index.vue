<template>
  <nav class="box" :style="{width}">
      <ul>
          <li></li>
      </ul>
  </nav>
</template>
<script>
export default {
  name: "sNav",
  data() {},
  props: {
    width: {
      type: [String],
      default: "200px"
    }
  }
};
</script>
<style scoped>
.box{
}
</style>
