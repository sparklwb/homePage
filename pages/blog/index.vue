<template>
  <section>
    <h3>blog</h3>
  </section>
</template>
<script>
export default {
   asyncData() {
    // return axios.get("http://sparklv.cn/test").then(res => {
    //   return { items: res.data };
    // });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 1000);
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
