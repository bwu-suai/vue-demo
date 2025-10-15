<template>
  <div class="slotCom">
    <div>我是slot组件</div>
    <slot></slot>

    <form ref="formRef" @submit.prevent="submitFn">
      <div class="formView">
        <input type="text" name="username" placeholder="hahaahha" />
      </div>

      <div class="formView">
        <select name="selectname">
          <option value="1">1231231</option>
          <option value="2">qwert</option>
          <option value="3">asdfgf</option>
          <option value="4">zxcvb</option>
        </select>
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

const formRef = useTemplateRef("formRef");

const submitFn = () => {
  const formData = new FormData(formRef.value);
  const username = formData.get("username");
  const selectname = formData.get("selectname");

  console.log(username);
  console.log(selectname);
};
</script>

<style lang="scss" scoped>
.slotCom {
  width: 400px;
  height: max-content;
  border: 2px solid #0b57d0;
  border-radius: 10px;
  padding: 5px 10px;
  margin-top: 30px;

  .formView {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 5px 10px;
    box-sizing: border-box;
    margin-bottom: 10px;

    select {
      width: 100%;

      option {
        width: 100%;
        background-color: #eee;

        :active {
          background-color: red;
        }
      }
    }

    input {
      width: 100%;
    }
  }

  button {
    min-width: 60px;
    padding: 5px 8px;
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
}
</style>
