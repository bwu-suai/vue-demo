<template>
  <div class="sortPage">
    <div>我是sort</div>
    <div>{{ store.msg }}</div>
    <div class="backClass" @click="goback()">返回</div>
    <slotCom>
      <div class="mySlot">我是插槽哈哈哈哈</div>
    </slotCom>
  </div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import slotCom from "@/components/slotCom.vue";
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
.sortPage {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;

  .mySlot {
    color: #4f4eb8;
  }
}

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
