<template>
  <div>我是home</div>
  <div>{{ store.message }}</div>

  <button @click="clickButton">点击我++</button>
  <button @click="setHelloNum">点击我子组件num变化</button>

  <div>
    <button @click="goSortFun()">点击跳转sort</button>
  </div>
  <HelloWorld ref="helloworld" />
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useRouter } from "vue-router";
const store = userNumStore();
const route = useRouter();

const helloworld = ref<InstanceType<typeof HelloWorld>>(null);

const clickButton = () => {
  store.count++;
};

const setHelloNum = () => {
  helloworld.value.num = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  helloworld.value.objData.name = "123123";
};

onMounted(() => {
  console.log(helloworld.value);
  helloworld.value.hahah();
});

const goSortFun = () => {
  route.push("/sort?hahah=就是这样的哈哈哈哈");
};
</script>

<style scoped lang="scss">
.box1 {
  span {
    color: red;
  }
}
</style>
