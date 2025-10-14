<template>
  <div class="box1">
    <h1>我是子组件</h1>
    <div>这是全局store的count{{ store.count }}</div>
    <div>这个是我的num：{{ num }}</div>

    <button @click="invokeParent">我调用父组件方法</button>

    <div>
      <el-button>去微软上课</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
import { ref, reactive, watch, onMounted, inject } from "vue";
const store = userNumStore();
const num = ref(0);

const { parentFun } = inject<{ parentFun: () => void }>("homeParent");

let hahah = () => {
  console.log("你好啊啊啊啊啊");
  num.value = 10;
};

interface objType {
  [key: string]: any;
}

const objData = reactive<objType>({
  hahah: () => {
    console.log("sajiuasdhjssjwqi");
  },
});

onMounted(() => {});

watch(objData, (d) => {
  console.log(d.name);
});

const invokeParent = () => {
  parentFun();
};

defineExpose({
  hahah,
  num,
  objData,
});
</script>

<style scoped lang="scss">
.box1 {
  width: 400px;
  height: max-content;
  border: 2px solid #0b57d0;
  border-radius: 10px;
  padding: 5px 10px;
}
</style>
