<template>
  <div class="app-big-box">
    <Transition name="route">
      <RouterView />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
const store = userNumStore();
</script>

<style scoped lang="scss">
.app-big-box {
  width: 100%;
  overflow: hidden;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

/* 进入过程中的状态（持续时间与动画曲线） */
.route-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* 进入后的状态（通常与默认状态一致） */
.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* 离开前的状态 */
.route-leave-from {
  opacity: 1;
}

/* 离开过程中的状态 */
.route-leave-active {
  transition: opacity 0.3s ease;
}

/* 离开后的状态 */
.route-leave-to {
  opacity: 0;
}
</style>
