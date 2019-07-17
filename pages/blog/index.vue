<template>
  <div>
    <BHeader @search="search" />
    <div class="banner">
      <!-- <img class="banner-img" src="../../assets/images/banner.jpg" alt="banner"> -->
    </div>
    <main class="main">
      <section class="main-content">
        <BNav />
        <BlogBox :tags="tags" :blogList="blogList" />
        <nav style="width:0;height:0;overflow:hidden">
          <a v-for="item in totalPage" :key="item" :href="`/blog?page=${item}`">{{item}}</a>
        </nav>
      </section>
      <aside class="aside">
        <nav class="tag-nav">
          <div class="tag-nav-catalog">Catalog</div>
          <div
            v-for="item in tags"
            :key="item.id"
            :style="{color:activeCata==item.id?'#7292dc':'#333'}"
            class="tag-nav-item"
            @click="changeCata(item.id)"
          >{{item.name}}</div>
        </nav>
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
      blogList: [],
      tags: [],
      activeCata: "",
      page: 1,
      total: 0
    };
  },
  async asyncData({ params, route }) {
    const res = await api.getBlogByPage({
      pageSize: 18,
      pageNum: route.query.page || 1
    });
    const arr = res ? res.data.data : [];
    return { blogList: arr, total: res.data.total };
  },
  components: {
    BHeader,
    BNav,
    BlogBox
  },
  mounted() {
    this.getTags();
    this.activeCata = this.$route.query.tag || "";
    this.page = this.$route.query.page || 1;
    this.search();
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / 18);
    }
  },
  methods: {
    async search(text) {
      const res = await api.getBlogByPage({
        title: text,
        pageSize: 18,
        pageNum: this.page,
        tagId: this.activeCata
      });
      if (res) {
        this.blogList = res.data.data;
      }
    },
    async getTags() {
      const res = await api.getTags();
      if (res) {
        res.data.unshift({ id: "", name: "All" });
        this.tags = res.data;
      }
    },
    changeCata(id) {
      if (id) {
        this.$router.push({ path: "/blog", query: { tag: id } });
      } else {
        this.$router.push({ path: "/blog" });
      }
      this.activeCata = id;
      this.search();
    }
  }
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
    margin-left: 20px;
    margin-top: 40px;
    .tag-nav-catalog {
      font-size: 18px;
      font-weight: 500;
      border-left: 3px solid #6b91e2;
      padding-left: 15px;
    }
    .tag-nav-item {
      margin: 5px 0;
      cursor: pointer;
      font-size: 18px;
      font-weight: 400;
      padding-left: 23px;
    }
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
