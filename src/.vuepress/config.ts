import { defineUserConfig, viteBundler } from "vuepress";
import { ohmylive2dPlugin } from "vuepress-plugin-oh-my-live2d";
import { live2DAssistPlugin } from "./plugins/vuepress-plugin-live2DAssist";
import theme from "./theme.js";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";
import { shikiPlugin } from "@vuepress/plugin-shiki";

export default defineUserConfig({
  base: "/my-blog/",

  lang: "zh-CN",
  title: "马龙伟的博客",
  description: "马龙伟的博客",

  theme,

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
        },
      },
    },
    // vuePluginOptions: {},
  }),

  plugins: [
    // 代码高亮
    shikiPlugin({
      theme: "one-dark-pro",
    }),
    // 一言插件
    hitokotoPlugin({}),
    // 鼠标特效插件
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10,
      },
    }),
    // 看板娘辅助插件
    live2DAssistPlugin({
      subPageHidden: true,
    }),
    // 看板娘插件
    ohmylive2dPlugin({
      // 在这里进行配置
      source: "/assets/live2D",
      models: [
        {
          scale: 0.3,
          path: "/lafei_4/lafei_4.model3.json",
        },
        {
          scale: 0.7,
          path: "/z46_2/z46_2.model3.json",
        },
        {
          scale: 0.3,
          path: "/sipeibojue_5/sipeibojue_5.model3.json",
        },
      ],
      tips: {
        style: {
          width: 150,
          height: 100,
          offsetX: 0,
          offsetY: 90,
        },
      },
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
