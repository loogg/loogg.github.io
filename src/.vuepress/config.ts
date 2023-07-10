import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-blog/",

  lang: "zh-CN",
  title: "马龙伟的博客",
  description: "马龙伟的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
