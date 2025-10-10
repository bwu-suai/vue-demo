<template>
  <div>hahahahaha{{ store.count }}</div>
  <div>这个是我的num：{{ num }}</div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { ref } from "vue";
const store = userNumStore();
const num = ref(0);

let hahah = () => {
  console.log("你好啊啊啊啊啊");
  num.value = 10
};

defineExpose({
  hahah,
  num,
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
