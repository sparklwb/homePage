<template>
  <div class="outer-box">
    <div class="login-box">
      <h1 style="margin-bottom:20px;">Background</h1>
      <Input style="margin-bottom:20px;" v-model="username"/>
      <Input style="margin-bottom:20px;" type="password" v-model="password"/>
      <Button type="primary" long @click="login">login</Button>
    </div>
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
    async login() {
      const res = await this.$api.login({
        username: this.username,
        password: this.password
      });
      if (res) {
        this.$router.push("/admin/bg");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.outer-box {
  display: flex;
  justify-content: center;
  .login-box {
    width: 400px;
    border: 1px solid #e3e4e5;
    padding: 40px 20px;
    margin-top: 150px;
    text-align: center;
  }
}
</style>
