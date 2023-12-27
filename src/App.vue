<template>
  <TheNav />
  <RouterView />
  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
