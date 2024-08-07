import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "agile 全家桶",
    icon: "stack",
    prefix: "/agile_packages/",
    children: [
      { text: "关于", icon: "info", link: "" },
    ],
  },
  "/tutorial",
  "/note",
  {
    text: "关于",
    icon: "info",
    prefix: "/about/",
    children:[
      { text: "关于我", icon: "people", link: "intro" },
      { text: "关于本站", icon: "info", link: "about" },
    ]
  },
  "/video",
]);
