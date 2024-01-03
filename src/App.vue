<template>
  <TheNav v-if="!isLoggedIn" />
  <LoggedNav v-else />
  <RouterView />
  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNav from "@/components/TheNav.vue";
import LoggedNav from "@/components/LoggedNav.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useIsLoggedIn } from "@/stores/user";
import { watch } from "vue";
const { isLoggedIn } = useIsLoggedIn();

watch(
  () => isLoggedIn,
  (value) => {
    console.log(value);
  }
);
</script>
