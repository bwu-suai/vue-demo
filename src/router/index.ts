import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/", // URL 路径
    name: "home", // 路由名称（可选，用于编程式导航）
    component: () => import("../pages/home/index.vue"), // 对应的组件
  },
  {
    path: "/sort",
    name: "sort",
    component: () => import("../pages/sort/index.vue"),
  },
  {
    // 404 路由：匹配所有未定义的路径（需放在最后）
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound/index.vue"),
  },
];

// 创建路由实例
const router = createRouter({
  // 历史模式：createWebHistory (HTML5 模式，无 #)；createWebHashHistory (哈希模式，带 #)
  history: createWebHashHistory(), // BASE_URL 从 .env 文件获取（默认为 '/'）
  routes, // 路由规则
});

export default router;
