<template>
  <div>我是sort</div>
  <div>{{ store.msg }}</div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const store = userNumStore();
const route = useRoute();

onMounted(() => {
  console.log(route.query.hahah);
});
</script>

<style scoped lang="scss">
.box1 {
  span {
    color: red;
  }
}
</style>
