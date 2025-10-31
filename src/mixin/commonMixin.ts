import { ref } from "vue";

export const useSetQuantity = () => {
  const num = ref(0);

  const fetchNum = () => {
    num.value++;
  };

  return { num, fetchNum };
};
