<template>
  <Container>
    <h1 class="text-2xl font-bold md:text-3xl">
      Faça acesso ao sistema
      <br />para o monitoramento<br />
      de sua saúde.
    </h1>
    <h2 class="text-l font-semibold">
      Se você não possui uma conta você pode se
      <router-link to="/register">
        <span class="text-blue-400 font-bold cursor-pointer"
          >Registrar agora mesmo</span
        ></router-link
      >
    </h2>
    <div class="space-y-6">
      <h1 class="text-2xl font-bold md:text-3xl">Seja bem-vindo!</h1>
      <TheInput
        class="w-[300px] mx-auto"
        type="email"
        v-model="state.email"
        placeholder="Digite o seu email"
      />
      <TheInput
        class="w-[300px] mx-auto"
        type="password"
        placeholder="Digite a sua senha"
        v-model="state.password"
      />
      <div class="flex items-center justify-center gap-4">
        <fwb-button @click="signInWithEmail" class="w-[300px]" color="default"
          >Acessar</fwb-button
        >
        <Spinning v-show="isLoading" />
      </div>
      <p class="text-red-500">{{ message }}</p>
      <p class="text-gray-500 cursor-pointer">Esqueceu a senha?</p>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Container from "@/components/Container.vue";
import TheInput from "@/components/TheInput.vue";
import { FwbButton } from "flowbite-vue";
import { supabase } from "@/lib/supabase";
import { useRouter } from "vue-router";
import Spinning from "@/components/Spinning.vue";
import { useIsLoggedIn } from "@/composables/useIsLoggedIn";

const { isLoggedIn } = useIsLoggedIn();
interface State {
  email: string;
  password: string;
}

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

const signInWithEmail = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.value.email,
      password: state.value.password,
    });
    accessToken.value = data.session?.access_token;
    loggedEmail.value = data.user?.email;
    isLoggedIn.value = true;

    if (accessToken.value) {
      router.push("/system");
    } else {
      message.value = "Senha ou email incorretos, tente novamente!";
      isLoading.value = false;
      isLoggedIn.value = false;
    }
  } catch (error) {
    console.log(error);
    isLoggedIn.value = false;
  } finally {
    isLoading.value = false;
  }
};
</script>
