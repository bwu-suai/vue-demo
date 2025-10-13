<template>
  <h1>404 页面不存在</h1>

  <button @click="goHomepage">去home页面</button>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const route = useRouter();

const goHomepage = () => {
  route.replace("/");
};
</script>
<style scoped lang="scss"></style>
