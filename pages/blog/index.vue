<template>
  <div>
    <header class="header">
      <a class="logo" href="#">spark's blog</a>
    </header>
    <div class="banner">
      <!-- <img class="banner-img" src="../../assets/images/banner.jpg" alt="banner"> -->
    </div>
    <main class="main">
      <section class="main-content">
        <nav class="main-nav"></nav>
        <div></div>
      </section>
      <aside class="aside">
        <nav class="date-nav"></nav>
      </aside>
    </main>
    <footer class="footer"></footer>
  </div>
</template>
<script>
export default {
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 1000);
    });
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  background: #444;
}
.banner {
  height: 400px;
  overflow: hidden;
  .banner-img {
    width: 100%;
    // height:250px;
  }
}
.main {
  display: flex;
  .main-content {
    flex: 1;
    height: 1000px;
    background: #987976;
  }
  .aside {
    width: 200px;
    height: 600px;
    background: #546847;
    margin-left: 20px;
  }
}
.footer {
  height: 300px;
  background: #333;
}
</style>
