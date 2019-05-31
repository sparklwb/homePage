<template>
  <s-input v-model="username"/>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  watch: {
    username() {
      console.log(this.username);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
