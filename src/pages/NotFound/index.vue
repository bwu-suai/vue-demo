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
<style scoped lang="scss">
button {
  padding: 8px 5px;
  box-sizing: border-box;
  background-color: #019dff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
</style>
