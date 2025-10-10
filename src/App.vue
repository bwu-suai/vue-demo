<template>
  <RouterView />
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
const store = userNumStore();
</script>

<style scoped lang="scss">
.box1 {
  span {
    color: red;
  }
}
</style>
