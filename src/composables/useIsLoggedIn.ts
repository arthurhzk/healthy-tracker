import { ref } from "vue";

export function useIsLoggedIn() {
  const isLoggedIn = ref(false);

  return { isLoggedIn };
}
