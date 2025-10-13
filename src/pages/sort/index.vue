<template>
  <div>我是sort</div>
  <div>{{ store.msg }}</div>
  <div class="backClass" @click="goback()">返回</div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const store = userNumStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(route.query.hahah);
});

const goback = () => {
  router.back();
};
</script>

<style scoped lang="scss">
.backClass {
  width: 80px;
  height: 25px;
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
