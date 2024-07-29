// src/.vuepress/config.ts
import { defineUserConfig, viteBundler } from "vuepress";
import { ohmylive2dPlugin } from "vuepress-plugin-oh-my-live2d";

// src/.vuepress/theme/index.ts
import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
var __vite_injected_original_import_meta_url = "file:///D:/%E4%B8%AA%E4%BA%BA%E6%96%87%E6%A1%A3%E5%A4%87%E4%BB%BD/my-blog/src/.vuepress/theme/index.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var MyTheme = (options) => {
  return {
    name: "vuepress-theme-local",
    extends: hopeTheme(options, { custom: true }),
    alias: {
      // 你可以在这里覆盖或新增别名
      // 比如这里我们将 vuepress-theme-hope 主页组件改为自己主题下的 components/HomePage.vue
      "@theme-hope/components/PageFooter": path.resolve(
        __dirname,
        "./components/PageFooter.vue"
      ),
      "@theme-hope/modules/blog/components/BlogHero": path.resolve(
        __dirname,
        "./components/BlogHero.vue"
      )
    }
  };
};

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  {
    text: "agile \u5168\u5BB6\u6876",
    icon: "stack",
    prefix: "/agile_packages/",
    children: [
      { text: "\u5173\u4E8E", icon: "info", link: "" }
    ]
  },
  {
    text: "\u8F6F\u4EF6\u6559\u7A0B",
    icon: "software",
    prefix: "/tutorial/"
  },
  {
    text: "\u5B66\u4E60\u7B14\u8BB0",
    icon: "read",
    prefix: "/note/"
  },
  {
    text: "\u5173\u4E8E",
    icon: "info",
    prefix: "/about/",
    children: [
      { text: "\u5173\u4E8E\u6211", icon: "people", link: "intro" },
      { text: "\u5173\u4E8E\u672C\u7AD9", icon: "info", link: "about" }
    ]
  },
  "/video"
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/agile_packages/": [],
  "/cook/": "structure",
  "/video/": "structure",
  "/tutorial/": "structure",
  "/note/": "structure"
});

// src/.vuepress/theme.ts
var theme_default = MyTheme({
  hotReload: false,
  hostname: "https://loogg.github.io",
  author: {
    name: "\u9A6C\u9F99\u4F1F",
    url: "https://loogg.github.io"
  },
  favicon: "/logo.png",
  themeColor: true,
  fullscreen: true,
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "https://github.com/loogg/loogg.github.io",
  docsBranch: "master",
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: "Powered by VuePress|Theme by Hope",
  displayFooter: false,
  blog: {
    description: "\u7EB8\u4E0A\u5F97\u6765\u7EC8\u89C9\u6D45\uFF0C\u7EDD\u77E5\u6B64\u4E8B\u8981\u8EAC\u884C",
    intro: "/about/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:2544047213@qq.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/loogg",
      Gmail: "mailto:mlw199705@gmail.com"
      // Gitlab: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    }
  },
  // page meta
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  plugins: {
    components: {
      components: [
        "BiliBili",
        "VideoPlayer"
      ]
    },
    blog: true,
    git: true,
    comment: {
      provider: "Waline",
      // Artalk | Giscus | Waline | Twikoo
      // 在这里放置其他选项
      serverURL: "blog-api-sigma-eight.vercel.app",
      requiredMeta: ["nick"],
      reaction: true,
      locales: {
        "/": {
          placeholder: "\u6B22\u8FCE\u7559\u8A00~ _(\u2267\u2207\u2266\u300D\u2220)_ (\u586B\u5199\u5E38\u7528\u90AE\u7BB1\u5373\u53EF\u5FEB\u901F\u6536\u5230\u56DE\u590D\u901A\u77E5~)"
        }
      }
      // ...
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      card: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/plugins/vuepress-plugin-popper/index.ts
import { getDirname as getDirname2, path as path2 } from "@vuepress/utils";
var __vite_injected_original_import_meta_url2 = "file:///D:/%E4%B8%AA%E4%BA%BA%E6%96%87%E6%A1%A3%E5%A4%87%E4%BB%BD/my-blog/src/.vuepress/plugins/vuepress-plugin-popper/index.ts";
var __dirname2 = getDirname2(__vite_injected_original_import_meta_url2);
var popperPlugin = (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-popper",
      define: {
        popperOptions: options
      },
      multiple: false,
      clientConfigFile: path2.resolve(__dirname2, "./client/popper-client-config.ts")
    };
  };
};

// src/.vuepress/config.ts
import { PopperShape } from "@moefy-canvas/theme-popper";

// src/.vuepress/plugins/vuepress-plugin-hitokoto/index.ts
import { getDirname as getDirname3, path as path3 } from "@vuepress/utils";
var __vite_injected_original_import_meta_url3 = "file:///D:/%E4%B8%AA%E4%BA%BA%E6%96%87%E6%A1%A3%E5%A4%87%E4%BB%BD/my-blog/src/.vuepress/plugins/vuepress-plugin-hitokoto/index.ts";
var __dirname3 = getDirname3(__vite_injected_original_import_meta_url3);
var hitokotoPlugin = (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-hitokoto",
      define: {
        hitokotoOptions: options
      },
      multiple: false,
      clientConfigFile: path3.resolve(__dirname3, "./client/hitokoto-client-config.ts")
    };
  };
};

// src/.vuepress/config.ts
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "\u9A6C\u9F99\u4F1F\u7684\u535A\u5BA2",
  description: "\u9A6C\u9F99\u4F1F\u7684\u535A\u5BA2",
  theme: theme_default,
  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path4) => path4.replace(/^\/bing/, "")
          }
        }
      }
    }
    // vuePluginOptions: {},
  }),
  plugins: [
    // 代码高亮
    shikiPlugin({
      theme: "one-dark-pro"
    }),
    // 一言插件
    hitokotoPlugin({}),
    // 鼠标特效插件
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10
      }
    }),
    searchProPlugin({
      // 配置选项
      indexContent: true
    }),
    // 看板娘辅助插件
    // live2DAssistPlugin({
    //   subPageHidden: true,
    // }),
    // 看板娘插件
    ohmylive2dPlugin({
      // 在这里进行配置
      source: "/assets/live2D",
      models: [
        {
          scale: 0.3,
          path: "/lafei_4/lafei_4.model3.json"
        },
        {
          scale: 0.7,
          path: "/z46_2/z46_2.model3.json"
        },
        {
          scale: 0.3,
          path: "/sipeibojue_5/sipeibojue_5.model3.json"
        }
      ],
      tips: {
        style: {
          width: 150,
          height: 100,
          offsetX: 0,
          offsetY: 90
        }
      }
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS9pbmRleC50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL3BsdWdpbnMvdnVlcHJlc3MtcGx1Z2luLXBvcHBlci9pbmRleC50cyIsICJzcmMvLnZ1ZXByZXNzL3BsdWdpbnMvdnVlcHJlc3MtcGx1Z2luLWhpdG9rb3RvL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEL215LWJsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEXFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNiU5NiU4NyVFNiVBMSVBMyVFNSVBNCU4NyVFNCVCQiVCRC9teS1ibG9nL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZywgdml0ZUJ1bmRsZXIgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IG9obXlsaXZlMmRQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLW9oLW15LWxpdmUyZFwiO1xuaW1wb3J0IHsgbGl2ZTJEQXNzaXN0UGx1Z2luIH0gZnJvbSBcIi4vcGx1Z2lucy92dWVwcmVzcy1wbHVnaW4tbGl2ZTJEQXNzaXN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbmltcG9ydCB7IHBvcHBlclBsdWdpbiB9IGZyb20gXCIuL3BsdWdpbnMvdnVlcHJlc3MtcGx1Z2luLXBvcHBlclwiO1xuaW1wb3J0IHsgUG9wcGVyU2hhcGUgfSBmcm9tIFwiQG1vZWZ5LWNhbnZhcy90aGVtZS1wb3BwZXJcIjtcbmltcG9ydCB7IGhpdG9rb3RvUGx1Z2luIH0gZnJvbSBcIi4vcGx1Z2lucy92dWVwcmVzcy1wbHVnaW4taGl0b2tvdG9cIjtcbmltcG9ydCB7IHNoaWtpUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tc2hpa2lcIjtcbmltcG9ydCB7IHNlYXJjaFByb1BsdWdpbiB9IGZyb20gXCJ2dWVwcmVzcy1wbHVnaW4tc2VhcmNoLXByb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJcdTlBNkNcdTlGOTlcdTRGMUZcdTc2ODRcdTUzNUFcdTVCQTJcIixcbiAgZGVzY3JpcHRpb246IFwiXHU5QTZDXHU5Rjk5XHU0RjFGXHU3Njg0XHU1MzVBXHU1QkEyXCIsXG5cbiAgdGhlbWUsXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoe1xuICAgIHZpdGVPcHRpb25zOiB7XG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICBcIi9iaW5nXCI6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJodHRwczovL2NuLmJpbmcuY29tXCIsXG4gICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYmluZy8sIFwiXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gdnVlUGx1Z2luT3B0aW9uczoge30sXG4gIH0pLFxuXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBcdTRFRTNcdTc4MDFcdTlBRDhcdTRFQUVcbiAgICBzaGlraVBsdWdpbih7XG4gICAgICB0aGVtZTogXCJvbmUtZGFyay1wcm9cIixcbiAgICB9KSxcbiAgICAvLyBcdTRFMDBcdThBMDBcdTYzRDJcdTRFRjZcbiAgICBoaXRva290b1BsdWdpbih7fSksXG4gICAgLy8gXHU5RjIwXHU2ODA3XHU3Mjc5XHU2NTQ4XHU2M0QyXHU0RUY2XG4gICAgcG9wcGVyUGx1Z2luKHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBzaGFwZTogUG9wcGVyU2hhcGUuU3RhcixcbiAgICAgICAgc2l6ZTogMS45NSxcbiAgICAgICAgbnVtUGFydGljbGVzOiAxMCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgc2VhcmNoUHJvUGx1Z2luKHtcbiAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1OTAwOVx1OTg3OVxuICAgICAgaW5kZXhDb250ZW50OiB0cnVlXG4gICAgfSksXG4gICAgLy8gXHU3NzBCXHU2NzdGXHU1QTE4XHU4Rjg1XHU1MkE5XHU2M0QyXHU0RUY2XG4gICAgLy8gbGl2ZTJEQXNzaXN0UGx1Z2luKHtcbiAgICAvLyAgIHN1YlBhZ2VIaWRkZW46IHRydWUsXG4gICAgLy8gfSksXG4gICAgLy8gXHU3NzBCXHU2NzdGXHU1QTE4XHU2M0QyXHU0RUY2XG4gICAgb2hteWxpdmUyZFBsdWdpbih7XG4gICAgICAvLyBcdTU3MjhcdThGRDlcdTkxQ0NcdThGREJcdTg4NENcdTkxNERcdTdGNkVcbiAgICAgIHNvdXJjZTogXCIvYXNzZXRzL2xpdmUyRFwiLFxuICAgICAgbW9kZWxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzY2FsZTogMC4zLFxuICAgICAgICAgIHBhdGg6IFwiL2xhZmVpXzQvbGFmZWlfNC5tb2RlbDMuanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2NhbGU6IDAuNyxcbiAgICAgICAgICBwYXRoOiBcIi96NDZfMi96NDZfMi5tb2RlbDMuanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2NhbGU6IDAuMyxcbiAgICAgICAgICBwYXRoOiBcIi9zaXBlaWJvanVlXzUvc2lwZWlib2p1ZV81Lm1vZGVsMy5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgdGlwczoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICBvZmZzZXRZOiA5MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEL215LWJsb2cvc3JjLy52dWVwcmVzcy90aGVtZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEXFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZVxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU0JUI4JUFBJUU0JUJBJUJBJUU2JTk2JTg3JUU2JUExJUEzJUU1JUE0JTg3JUU0JUJCJUJEL215LWJsb2cvc3JjLy52dWVwcmVzcy90aGVtZS9pbmRleC50c1wiOy8vIC52dWVwcmVzcy90aGVtZS9pbmRleC50c1xuaW1wb3J0IHsgZ2V0RGlybmFtZSwgcGF0aCB9IGZyb20gXCJAdnVlcHJlc3MvdXRpbHNcIjtcbmltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgdHlwZSB7IFRoZW1lT3B0aW9ucyB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSBcIkB2dWVwcmVzcy9jb3JlXCI7XG5cbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGNvbnN0IE15VGhlbWUgPSAob3B0aW9uczogVGhlbWVPcHRpb25zKTogVGhlbWUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwidnVlcHJlc3MtdGhlbWUtbG9jYWxcIixcblxuICAgIGV4dGVuZHM6IGhvcGVUaGVtZShvcHRpb25zLCB7IGN1c3RvbTogdHJ1ZSB9KSxcblxuICAgIGFsaWFzOiB7XG4gICAgICAvLyBcdTRGNjBcdTUzRUZcdTRFRTVcdTU3MjhcdThGRDlcdTkxQ0NcdTg5ODZcdTc2RDZcdTYyMTZcdTY1QjBcdTU4OUVcdTUyMkJcdTU0MERcbiAgICAgIC8vIFx1NkJENFx1NTk4Mlx1OEZEOVx1OTFDQ1x1NjIxMVx1NEVFQ1x1NUMwNiB2dWVwcmVzcy10aGVtZS1ob3BlIFx1NEUzQlx1OTg3NVx1N0VDNFx1NEVGNlx1NjUzOVx1NEUzQVx1ODFFQVx1NURGMVx1NEUzQlx1OTg5OFx1NEUwQlx1NzY4NCBjb21wb25lbnRzL0hvbWVQYWdlLnZ1ZVxuICAgICAgXCJAdGhlbWUtaG9wZS9jb21wb25lbnRzL1BhZ2VGb290ZXJcIjogcGF0aC5yZXNvbHZlKFxuICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgIFwiLi9jb21wb25lbnRzL1BhZ2VGb290ZXIudnVlXCJcbiAgICAgICksXG4gICAgICBcIkB0aGVtZS1ob3BlL21vZHVsZXMvYmxvZy9jb21wb25lbnRzL0Jsb2dIZXJvXCI6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICBcIi4vY29tcG9uZW50cy9CbG9nSGVyby52dWVcIlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEL215LWJsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEXFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNiU5NiU4NyVFNiVBMSVBMyVFNSVBNCU4NyVFNCVCQiVCRC9teS1ibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcbiAgXCIvXCIsXG4gIHtcbiAgICB0ZXh0OiBcImFnaWxlIFx1NTE2OFx1NUJCNlx1Njg3NlwiLFxuICAgIGljb246IFwic3RhY2tcIixcbiAgICBwcmVmaXg6IFwiL2FnaWxlX3BhY2thZ2VzL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRleHQ6IFwiXHU1MTczXHU0RThFXCIsIGljb246IFwiaW5mb1wiLCBsaW5rOiBcIlwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU4RjZGXHU0RUY2XHU2NTU5XHU3QTBCXCIsXG4gICAgaWNvbjogXCJzb2Z0d2FyZVwiLFxuICAgIHByZWZpeDogXCIvdHV0b3JpYWwvXCJcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU1QjY2XHU0RTYwXHU3QjE0XHU4QkIwXCIsXG4gICAgaWNvbjogXCJyZWFkXCIsXG4gICAgcHJlZml4OiBcIi9ub3RlL1wiXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTE3M1x1NEU4RVwiLFxuICAgIGljb246IFwiaW5mb1wiLFxuICAgIHByZWZpeDogXCIvYWJvdXQvXCIsXG4gICAgY2hpbGRyZW46W1xuICAgICAgeyB0ZXh0OiBcIlx1NTE3M1x1NEU4RVx1NjIxMVwiLCBpY29uOiBcInBlb3BsZVwiLCBsaW5rOiBcImludHJvXCIgfSxcbiAgICAgIHsgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTY3MkNcdTdBRDlcIiwgaWNvbjogXCJpbmZvXCIsIGxpbms6IFwiYWJvdXRcIiB9LFxuICAgIF1cbiAgfSxcbiAgXCIvdmlkZW9cIixcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTRFMkFcdTRFQkFcdTY1ODdcdTY4NjNcdTU5MDdcdTRFRkQvbXktYmxvZy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTRFMkFcdTRFQkFcdTY1ODdcdTY4NjNcdTU5MDdcdTRFRkRcXFxcbXktYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNiU5NiU4NyVFNiVBMSVBMyVFNSVBNCU4NyVFNCVCQiVCRC9teS1ibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyKHtcbiAgXCIvYWdpbGVfcGFja2FnZXMvXCI6IFtcbiAgXSxcbiAgXCIvY29vay9cIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvdmlkZW8vXCI6XCJzdHJ1Y3R1cmVcIixcbiAgXCIvdHV0b3JpYWwvXCI6XCJzdHJ1Y3R1cmVcIixcbiAgXCIvbm90ZS9cIjpcInN0cnVjdHVyZVwiLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1NEUyQVx1NEVCQVx1NjU4N1x1Njg2M1x1NTkwN1x1NEVGRC9teS1ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NEUyQVx1NEVCQVx1NjU4N1x1Njg2M1x1NTkwN1x1NEVGRFxcXFxteS1ibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNiU5NiU4NyVFNiVBMSVBMyVFNSVBNCU4NyVFNCVCQiVCRC9teS1ibG9nL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBNeVRoZW1lIH0gZnJvbSBcIi4vdGhlbWUvaW5kZXhcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE15VGhlbWUoe1xuICBob3RSZWxvYWQ6IGZhbHNlLFxuICBob3N0bmFtZTogXCJodHRwczovL2xvb2dnLmdpdGh1Yi5pb1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiXHU5QTZDXHU5Rjk5XHU0RjFGXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbG9vZ2cuZ2l0aHViLmlvXCIsXG4gIH0sXG5cbiAgZmF2aWNvbjogXCIvbG9nby5wbmdcIixcbiAgdGhlbWVDb2xvcjogdHJ1ZSxcbiAgZnVsbHNjcmVlbjogdHJ1ZSxcblxuICBpY29uQXNzZXRzOiBcImljb25mb250XCIsXG5cbiAgbG9nbzogXCIvbG9nby5wbmdcIixcblxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb29nZy9sb29nZy5naXRodWIuaW9cIixcblxuICBkb2NzQnJhbmNoOiAnbWFzdGVyJyxcbiAgZG9jc0RpcjogXCJzcmNcIixcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyLFxuXG4gIC8vIHNpZGViYXJcbiAgc2lkZWJhcixcblxuICBmb290ZXI6IFwiUG93ZXJlZCBieSBWdWVQcmVzc3xUaGVtZSBieSBIb3BlXCIsXG5cbiAgZGlzcGxheUZvb3RlcjogZmFsc2UsXG5cbiAgYmxvZzoge1xuICAgIGRlc2NyaXB0aW9uOiBcIlx1N0VCOFx1NEUwQVx1NUY5N1x1Njc2NVx1N0VDOFx1ODlDOVx1NkQ0NVx1RkYwQ1x1N0VERFx1NzdFNVx1NkI2NFx1NEU4Qlx1ODk4MVx1OEVBQ1x1ODg0Q1wiLFxuICAgIGludHJvOiBcIi9hYm91dC9pbnRyby5odG1sXCIsXG4gICAgbWVkaWFzOiB7XG4gICAgICAvLyBCYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBCaWxpQmlsaTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBFbWFpbDogXCJtYWlsdG86MjU0NDA0NzIxM0BxcS5jb21cIixcbiAgICAgIC8vIEV2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEZsaXBib2FyZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBHaXRlZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvb2dnXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86bWx3MTk5NzA1QGdtYWlsLmNvbVwiLFxuICAgICAgLy8gR2l0bGFiOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEluc3RhZ3JhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBMYXJrOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExpbmtlZGluOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFBpbnRlcmVzdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUXpvbmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gcGFnZSBtZXRhXG4gIG1ldGFMb2NhbGVzOiB7XG4gICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgY29tcG9uZW50czp7XG4gICAgICBjb21wb25lbnRzOltcbiAgICAgICAgXCJCaWxpQmlsaVwiLFxuICAgICAgICBcIlZpZGVvUGxheWVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIGJsb2c6IHRydWUsXG4gICAgZ2l0OiB0cnVlLFxuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLCAvLyBBcnRhbGsgfCBHaXNjdXMgfCBXYWxpbmUgfCBUd2lrb29cblxuICAgICAgLy8gXHU1NzI4XHU4RkQ5XHU5MUNDXHU2NTNFXHU3RjZFXHU1MTc2XHU0RUQ2XHU5MDA5XHU5ODc5XG4gICAgICBzZXJ2ZXJVUkw6IFwiYmxvZy1hcGktc2lnbWEtZWlnaHQudmVyY2VsLmFwcFwiLFxuICAgICAgcmVxdWlyZWRNZXRhOiBbXCJuaWNrXCJdLFxuICAgICAgcmVhY3Rpb246IHRydWUsXG4gICAgICBsb2NhbGVzOiB7XG4gICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICBcIlx1NkIyMlx1OEZDRVx1NzU1OVx1OEEwMH4gXyhcdTIyNjdcdTIyMDdcdTIyNjZcdTMwMERcdTIyMjApXyAoXHU1ODZCXHU1MTk5XHU1RTM4XHU3NTI4XHU5MEFFXHU3QkIxXHU1MzczXHU1M0VGXHU1RkVCXHU5MDFGXHU2NTM2XHU1MjMwXHU1NkRFXHU1OTBEXHU5MDFBXHU3N0U1filcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyAuLi5cbiAgICB9LFxuICAgIC8vIGFsbCBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY2hhcnQ6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgIGNhcmQ6IHRydWUsXG4gICAgICBkZW1vOiB0cnVlLFxuICAgICAgZWNoYXJ0czogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGZsb3djaGFydDogdHJ1ZSxcbiAgICAgIGdmbTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBrYXRleDogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAgIH0sXG4gICAgICBwcmVzZW50YXRpb246IFtcImhpZ2hsaWdodFwiLCBcIm1hdGhcIiwgXCJzZWFyY2hcIiwgXCJub3Rlc1wiLCBcInpvb21cIl0sXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuICAgICAgdnVlUGxheWdyb3VuZDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVQaWM6IHRydWUsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vICAgYXBwbGU6IHtcbiAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbXNUaWxlOiB7XG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAvLyAgICAgICAgIGljb25zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTRFMkFcdTRFQkFcdTY1ODdcdTY4NjNcdTU5MDdcdTRFRkQvbXktYmxvZy9zcmMvLnZ1ZXByZXNzL3BsdWdpbnMvdnVlcHJlc3MtcGx1Z2luLXBvcHBlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU0RTJBXHU0RUJBXHU2NTg3XHU2ODYzXHU1OTA3XHU0RUZEXFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxwbHVnaW5zXFxcXHZ1ZXByZXNzLXBsdWdpbi1wb3BwZXJcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNiU5NiU4NyVFNiVBMSVBMyVFNSVBNCU4NyVFNCVCQiVCRC9teS1ibG9nL3NyYy8udnVlcHJlc3MvcGx1Z2lucy92dWVwcmVzcy1wbHVnaW4tcG9wcGVyL2luZGV4LnRzXCI7aW1wb3J0IHsgQXBwLCBQYWdlT3B0aW9ucywgUGx1Z2luRnVuY3Rpb24gfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IGdldERpcm5hbWUsIHBhdGggfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XG5pbXBvcnQgeyBQb3BwZXJPcHRpb24gfSBmcm9tIFwiLi90eXBlXCI7XG5cbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKTtcblxuY29uc3QgcG9wcGVyUGx1Z2luID0gKG9wdGlvbnM/OiBQb3BwZXJPcHRpb24pOiBQbHVnaW5GdW5jdGlvbiA9PiB7XG4gIHJldHVybiAoYXBwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IFwidnVlcHJlc3MtcGx1Z2luLXBvcHBlclwiLFxuICAgICAgZGVmaW5lOiB7XG4gICAgICAgIHBvcHBlck9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgY2xpZW50Q29uZmlnRmlsZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2NsaWVudC9wb3BwZXItY2xpZW50LWNvbmZpZy50c1wiKSxcbiAgICB9O1xuICB9O1xufTtcbmV4cG9ydCB7IHBvcHBlclBsdWdpbiB9O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTRFMkFcdTRFQkFcdTY1ODdcdTY4NjNcdTU5MDdcdTRFRkQvbXktYmxvZy9zcmMvLnZ1ZXByZXNzL3BsdWdpbnMvdnVlcHJlc3MtcGx1Z2luLWhpdG9rb3RvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTRFMkFcdTRFQkFcdTY1ODdcdTY4NjNcdTU5MDdcdTRFRkRcXFxcbXktYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHBsdWdpbnNcXFxcdnVlcHJlc3MtcGx1Z2luLWhpdG9rb3RvXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTQlQjglQUElRTQlQkElQkElRTYlOTYlODclRTYlQTElQTMlRTUlQTQlODclRTQlQkIlQkQvbXktYmxvZy9zcmMvLnZ1ZXByZXNzL3BsdWdpbnMvdnVlcHJlc3MtcGx1Z2luLWhpdG9rb3RvL2luZGV4LnRzXCI7aW1wb3J0IHsgQXBwLCBQYWdlT3B0aW9ucywgUGx1Z2luRnVuY3Rpb24gfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IGdldERpcm5hbWUsIHBhdGggfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XG5cbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKTtcbmludGVyZmFjZSBIaXRva290b09wdGlvbiB7XG5cbn1cbmNvbnN0IGhpdG9rb3RvUGx1Z2luID0gKG9wdGlvbnM/OiBIaXRva290b09wdGlvbik6IFBsdWdpbkZ1bmN0aW9uID0+IHtcbiAgcmV0dXJuIChhcHApID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJ2dWVwcmVzcy1wbHVnaW4taGl0b2tvdG9cIixcbiAgICAgIGRlZmluZToge1xuICAgICAgICBoaXRva290b09wdGlvbnM6IG9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgY2xpZW50Q29uZmlnRmlsZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2NsaWVudC9oaXRva290by1jbGllbnQtY29uZmlnLnRzXCIpLFxuICAgIH07XG4gIH07XG59O1xuZXhwb3J0IHsgaGl0b2tvdG9QbHVnaW4gLEhpdG9rb3RvT3B0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlQsU0FBUyxrQkFBa0IsbUJBQW1CO0FBQ3pXLFNBQVMsd0JBQXdCOzs7QUNBakMsU0FBUyxZQUFZLFlBQVk7QUFDakMsU0FBUyxpQkFBaUI7QUFGd0osSUFBTSwyQ0FBMkM7QUFNbk8sSUFBTSxZQUFZLFdBQVcsd0NBQWU7QUFFckMsSUFBTSxVQUFVLENBQUMsWUFBaUM7QUFDdkQsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBRU4sU0FBUyxVQUFVLFNBQVMsRUFBRSxRQUFRLEtBQUssQ0FBQztBQUFBLElBRTVDLE9BQU87QUFBQTtBQUFBO0FBQUEsTUFHTCxxQ0FBcUMsS0FBSztBQUFBLFFBQ3hDO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGdEQUFnRCxLQUFLO0FBQUEsUUFDbkQ7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBQzNCMlQsU0FBUyxjQUFjO0FBRWxWLElBQU8saUJBQVEsT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1IsRUFBRSxNQUFNLGdCQUFNLE1BQU0sUUFBUSxNQUFNLEdBQUc7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLElB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TUFDVixrQkFBa0JHLE1BQUssUUFBUUYsWUFBVyxvQ0FBb0M7QUFBQSxJQUNoRjtBQUFBLEVBQ0Y7QUFDRjs7O0FOWEEsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyx1QkFBdUI7QUFFaEMsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFFTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFFYjtBQUFBLEVBRUEsU0FBUyxZQUFZO0FBQUEsSUFDbkIsYUFBYTtBQUFBLE1BQ1gsUUFBUTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsU0FBUztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsU0FBUyxDQUFDRyxVQUFTQSxNQUFLLFFBQVEsV0FBVyxFQUFFO0FBQUEsVUFDL0M7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBRUYsQ0FBQztBQUFBLEVBRUQsU0FBUztBQUFBO0FBQUEsSUFFUCxZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUE7QUFBQSxJQUVELGVBQWUsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUVqQixhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixPQUFPLFlBQVk7QUFBQSxRQUNuQixNQUFNO0FBQUEsUUFDTixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGdCQUFnQjtBQUFBO0FBQUEsTUFFZCxjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1ELGlCQUFpQjtBQUFBO0FBQUEsTUFFZixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osT0FBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFHRixDQUFDOyIsCiAgIm5hbWVzIjogWyJnZXREaXJuYW1lIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJfX2Rpcm5hbWUiLCAiZ2V0RGlybmFtZSIsICJwYXRoIiwgImdldERpcm5hbWUiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgIl9fZGlybmFtZSIsICJnZXREaXJuYW1lIiwgInBhdGgiLCAicGF0aCJdCn0K
