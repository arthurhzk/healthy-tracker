<template>
  <TheNav />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNav from "@/components/TheNav.vue";
</script>
