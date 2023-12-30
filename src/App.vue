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
import { useIsLoggedIn } from "@/composables/useIsLoggedIn";
const { isLoggedIn } = useIsLoggedIn();
</script>
