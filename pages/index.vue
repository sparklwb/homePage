<template>
  <section>
    <canvas id="atom" style="background-color:rgb(247,250,252)"></canvas>
    <div class="content">
      <div class="title animated bounce">Welcome to Spark's homePage !</div>
      <s-button style="margin-top:50px;" type="sblue" @click="toBlog">B l o g</s-button>
    </div>
  </section>
</template>

<script>
import DrawAtom from "./components/atom.js";
import axios from "axios";
import { resolve } from "q";
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      var atom = document.getElementById("atom");
      var cheight = document.documentElement.clientHeight - 5;
      var cwidth = document.body.clientWidth;
      atom.setAttribute("width", cwidth);
      atom.setAttribute("height", cheight);
      let num = 25;
      if (cwidth < 800) {
        num = 10;
      }
      var obj = new DrawAtom(atom, {
        pointColor: "#BFEFFF",
        lineColor: "#BFEFFF",
        num: num
      });
      obj.run();
    },
    toBlog() {
      this.$router.push("blog");
    }
  }
};
</script>


<style scoped lang="scss">
@import "../assets/common.scss";
$text-color: rgb(15, 136, 235);
section {
  text-align: center;
  position: relative;
  height: 100vh;
  background-color: rgb(247, 250, 252);
}
.title {
  width: 100%;
  font-size: 40px;
  color: $text-color;
  font-family: "Times New Roman", Times, serif;
}
.content {
  width: 100%;
  position: absolute;
  top: 30%;
}
</style>