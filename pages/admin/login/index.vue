<template>
  <div>
    <s-input v-model="username"/>
    <s-input type="password" v-model="password"/>
    <s-button @click="login" type="sblue">login</s-button>
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
  methods:{
    login(){
      this.$router.push('/admin/bg')
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
