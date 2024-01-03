import { defineStore } from "pinia";

import { ref } from "vue";
export const useIsLoggedIn = defineStore("users", () => {
  const isLoggedIn = ref(false);
  const setLoggedIn = (value: boolean) => {
    isLoggedIn.value = value;
  };
  return { isLoggedIn, setLoggedIn };
});
