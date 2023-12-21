<template>
  <Container>
    <h1 class="text-2xl font-bold md:text-3xl">
      Crie a sua conta
      <br />para realizar o acesso!
    </h1>

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
      <div class="flex items-center justify-center gap-8">
        <fwb-button @click="registerCredentials" color="default"
          >Registrar</fwb-button
        >
        <Spinning v-if="isLoading" />
      </div>
      <fwb-alert v-show="success" class="w-[300px] mx-auto" icon type="success">
        {{ message }}
      </fwb-alert>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Container from "@/components/Container.vue";
import TheInput from "@/components/TheInput.vue";
import { FwbButton } from "flowbite-vue";
import { useMonitoringStore } from "@/stores/monitoring";
import Spinning from "@/components/Spinning.vue";
import { supabase } from "@/lib/supabase";
import { FwbAlert } from "flowbite-vue";
import { z } from "zod";
const { state } = useMonitoringStore();

const isLoading = ref<boolean>(false);
const message = ref<string>("");
const success = ref<boolean>();

const defaultSchema = z.object({
  email: z.string().email().describe("Email must be a valid email"),
  password: z
    .string()
    .min(8)
    .describe("Password must be at least 8 characters"),
});

const validationResult = defaultSchema.safeParse({
  email: state.email,
  password: state.password,
});

const registerCredentials = async () => {
  isLoading.value = true;

  const { data, error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password,
  });
};
</script>
