import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  // base: "/chusan.tech/",

  lang: "zh-CN",
  title: "chusan.tech",
  description: "技术分享网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
