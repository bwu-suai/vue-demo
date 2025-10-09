<template>
  <RouterView />
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
const store = userNumStore();

const clickButton = () => {
  console.log("12312312123");
  store.message = "nihaoaaaa";
};

const buttonClick = () => {
  store.increment();
};
</script>

<style scoped lang="scss">
.box1 {
  span {
    color: red;
  }
}
</style>
