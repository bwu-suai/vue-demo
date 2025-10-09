import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path' // 关键：导入 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 关键：配置 @ 指向 src 目录
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
