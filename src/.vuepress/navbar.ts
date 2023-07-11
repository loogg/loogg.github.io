import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "agile 全家桶",
    icon: "discover",
    prefix: "/agile_packages/",
    children: [
      { text: "agile_upgrade", icon: "github", link: "https://github.com/loogg/agile_upgrade" },
      { text: "agile_modbus", icon: "github", link: "https://github.com/loogg/agile_modbus" },
      { text: "agile_led", icon: "github", link: "https://github.com/loogg/agile_led" },
      { text: "agile_button", icon: "github", link: "https://github.com/loogg/agile_button" },
      { text: "agile_console", icon: "github", link: "https://github.com/loogg/agile_console" },
      { text: "agile_telnet", icon: "github", link: "https://github.com/loogg/agile_telnet" },
      { text: "agile_jsmn", icon: "github", link: "https://github.com/loogg/agile_jsmn" },
      { text: "agile_ftp", icon: "github", link: "https://github.com/loogg/agile_ftp" },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    prefix: "/tutorial/",
    children: ["VOFA+"]
  },
]);
