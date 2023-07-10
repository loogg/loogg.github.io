import { defineClientConfig } from "@vuepress/client";
import Layout from "./theme/layouts/Layout.vue";

export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    Layout,
  },
});
