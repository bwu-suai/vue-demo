<template>
  <div>我是home</div>
  <div>{{ store.message }}</div>

  <button @click="clickButton">点击我++</button>
  <button @click="setHelloNum">点击我子组件num变化</button>
  <HelloWorld ref="helloworld" />
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const store = userNumStore();

const helloworld = ref(null);

const clickButton = () => {
  store.count++;
};

const setHelloNum = () => {
  helloworld.value.num = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
};

onMounted(() => {
  console.log(helloworld.value);
  helloworld.value.hahah();
});
</script>

<style scoped lang="scss">
.box1 {
  span {
    color: red;
  }
}
</style>
<!-- <InstanceType<typeof HelloWorld>> -->
