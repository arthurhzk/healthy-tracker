import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

interface State {
  email: string;
  password: string;
}

export const useMonitoringStore = defineStore("monitoring", () => {
  const initialState: State = {
    email: "",
    password: "",
  };
  const isLoading = ref<boolean>(false);
  const router = useRouter();
  const state = ref<State>(initialState);
  const message = ref<string>("");
  const accessToken = ref();
  const loggedEmail = ref();
  const isLoggedIn = ref<boolean>(false);
  const signInWithEmail = async () => {
    try {
      isLoading.value = true;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: state.value.email,
        password: state.value.password,
      });
      accessToken.value = data.session?.access_token;
      loggedEmail.value = data.user?.email;
      if (accessToken.value) {
        router.push("/system");
      } else {
        message.value = "Senha ou email incorretos, tente novamente!";
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    state,
    signInWithEmail,
    message,
    accessToken,
    isLoggedIn,
    loggedEmail,
  };
});
