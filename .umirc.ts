import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none"
  },
  routes: [
    {
      path: "/",
      component: "@/layouts/index",
      routes: [
        { path: "/shop/index", component: "@/pages/index", title: "商品中心" },
        { path: "/user", component: "@/pages/user", title: "个人中心" },
        { path: "/dva", component: "@/pages/dva", title: "dva" },
        { component: "@/pages/error" }
      ]
    }
  ],
  fastRefresh: {},
  hash: true,
  base: "/",
  publicPath: "/statics/",
  outputPath: "dist",
  title: "umijs",
  proxy: {
    "/api": {
      target: "https://www.abc.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
  theme: {
  },

  //关闭mock数据
  //mock:false

});
