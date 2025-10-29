import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 关键：导入 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 关键：配置 @ 指向 src 目录
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 第三方依赖：vue、vue-router、pinia等核心库
          "vue-vendor": ["vue", "vue-router", "pinia"],
          // 其他第三方工具库：axios、lodash等
          "utils-vendor": ["axios", "lodash-es"],
          // 业务工具函数：src/utils下的代码
          "app-utils": ["@/utils"],
          // 公共组件：src/components下的代码
          "app-components": ["@/components"],
        },
      },
    },
  },
});
