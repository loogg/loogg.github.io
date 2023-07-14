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
  {
    text: "软件教程",
    icon: "software",
    prefix: "/tutorial/",
    children: ["VOFA+"]
  },
]);
