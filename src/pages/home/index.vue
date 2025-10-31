<template>
  <div class="homeBigbox">
    <div>我是home</div>
    <div>{{ store.message }}</div>

    <button class="marginB" @click="clickButton">点击我store.count++</button>
    <button class="marginB" @click="setHelloNum">点击我子组件num变化</button>
    <div>
      <button class="marginB" @click="goSortFun()">点击跳转sort</button>
    </div>
    <HelloWorld ref="helloworld" />
  </div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { onMounted, getCurrentInstance, useTemplateRef, provide } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useRouter } from "vue-router";
const store = userNumStore();
const route = useRouter();
const currentThis = getCurrentInstance();

// 获取子组件ref
const helloworld = useTemplateRef("helloworld");

const clickButton = () => {
  store.count++;
};

const setHelloNum = () => {
  helloworld.value.num = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  helloworld.value.objData.name = "1231233333";
};

onMounted(() => {
  console.log("hahahahahah", currentThis);
});

const goSortFun = () => {
  route.push("/sort?hahah=就是这样的哈哈哈哈1111");
};

const parentFun = () => {
  console.log("我是父组件方法！！！");
};

provide("homeParent", {
  parentFun,
});
</script>

<style scoped lang="scss">
.homeBigbox {
  width: 100%;
  height: calc(100vh + 300px);
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .marginB {
    margin-bottom: 10px;
  }
}
</style>
