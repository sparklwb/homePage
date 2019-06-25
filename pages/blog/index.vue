<template>
  <div>
    <BHeader/>
    <div class="banner">
      <!-- <img class="banner-img" src="../../assets/images/banner.jpg" alt="banner"> -->
    </div>
    <main class="main">
      <section class="main-content">
        <BNav/>
        <BlogBox :blogList="blogList"/>
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
import api from "@/utils/api";
export default {
  data() {
    return {
      blogList: []
    };
  },
  async asyncData({ params }) {
    const res = await api.getBlogByPage({ pageSize: 10, pageNum: 1 });
    const arr = res ? res.data.data : [];
    return { blogList: arr };
  },
  components: {
    BHeader,
    BNav,
    BlogBox
  },
  mounted() {
    console.log(this.blogList);
    // console.log(this.$t('links.home'))
    // this.$i18n.locale = 'fr'
    // console.log(this.$t('links.home'))
  }
  // mounted() {

  // }
};
</script>
<style lang="scss" scoped>
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
  width: 880px;
  margin: 20px auto;
  .main-content {
    float: left;
    width: 640px;
    min-height: 1000px;
  }
  .aside {
    float: left;
    width: 220px;
    height: 600px;
    background: #546847;
    margin-left: 20px;
    margin-top: 40px;
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
@media screen and (min-width: 1200px) {
  .main {
    width: 1200px;
    .main-content {
      width: 960px;
    }
  }
}
</style>
