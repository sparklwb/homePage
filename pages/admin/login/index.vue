<template>
  <div>
    <Input v-model="username"/>
    <Input type="password" v-model="password"/>
    <Button @click="login">login</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/admin/bg");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
