<template>
  <div>
    <BHeader/>
    <div class="banner">
      <!-- <img class="banner-img" src="../../assets/images/banner.jpg" alt="banner"> -->
    </div>
    <main class="main">
      <section class="main-content">
        <BNav/>
        <BlogBox/>
      </section>
      <aside class="aside">
        <nav class="date-nav"></nav>
      </aside>
    </main>
    <footer class="footer"></footer>
  </div>
</template>
<script>
import BHeader from "./components/header";
import BNav from "./components/blogNav";
import BlogBox from "./components/blogBox";
export default {
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 1000);
    });
  },
  components: {
    BHeader,
    BNav,
    BlogBox
  },
  mounted() {
    // console.log(this.$t('links.home'))
    // this.$i18n.locale = 'fr'
    // console.log(this.$t('links.home'))
  }
};
</script>
<style lang="scss" scoped>
$content-width: 750px;
$aside-width: 220px;
.banner {
  height: 250px;
  overflow: hidden;
  background: #6b91e1;
  .banner-img {
    width: 100%;
    // height:250px;
  }
}
.main {
  width: $content-width + $aside-width + 20px;
  margin: 20px auto;
  .main-content {
    float: left;
    width: $content-width;
    min-height: 1000px;
  }
  .aside {
    float: left;
    width: $aside-width;
    height: 600px;
    background: #546847;
    margin-left: 20px;
  }
  &::after {
    content: " ";
    clear: both;
    display: block;
    font-size: 0;
    height: 0;
  }
}
.footer {
  height: 300px;
  background: #333;
}
</style>
