import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: pkg.description }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: "@/components/comLoading.vue",

  /*
   ** Global CSS
   */
  css: ["animate.css/animate.min.css", "@/assets/fonts/iconfont.css", "@/assets/index.scss", "highlight.js/styles/github.css", "codemirror/lib/codemirror.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "@/plugins", ssr: false }, "~/plugins/i18n.js", { src: "~/plugins/codemirror.js", ssr: false }],

  router: {
    middleware: "i18n"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
