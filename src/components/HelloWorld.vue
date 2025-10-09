<template>
  <div>hahahahaha{{ store.count }}</div>

</template>

<script setup lang="ts">
import { userNumStore } from "@/store/index";
const store = userNumStore();

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
