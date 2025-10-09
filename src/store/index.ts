import { defineStore } from "pinia";

export const userNumStore = defineStore("userNumStore", {
  // 状态（类似组件的 data）
  state: () => ({
    count: 0,
    message: "Hello Pinia",
    msg: '哈哈哈哈哈哈'
  }),

  // 计算属性（类似组件的 computed）
  getters: {
    // 基于 state 计算
    doubleCount: (state) => state.count * 2,
    // 使用 this 访问其他 getters（需指定返回值类型）
    doubleCountPlusOne(): number {
      return this.doubleCount + 1;
    },
  },

  // 方法（处理同步/异步逻辑，类似组件的 methods）
  actions: {
    increment() {
      // 直接修改 state（无需像 Vuex 那样用 mutations）
      this.count++;
    },
    // 异步示例（如请求接口）
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟接口延迟
      this.count++;
    },
    // 接收参数修改状态
    setMessage(newMsg: string) {
      this.message = newMsg;
    },
  },
});
