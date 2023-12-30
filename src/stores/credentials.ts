import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { ref } from "vue";
export const useCredentialsStore = defineStore("credentials", () => {
  const userLogged = ref();

  const getUser = async () => {
    const response = await supabase.auth.getUser();
    const userEmail = response.data.user?.email;
    userLogged.value = userEmail;
  };

  getUser();

  return { userLogged };
});
