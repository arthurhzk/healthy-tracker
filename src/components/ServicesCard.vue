<template>
  <section class="space-y-2">
    <img class="w-20 h-20 mx-auto" :src="props.image" />

    <h1 class="font-bold">{{ props.title }}</h1>

    <h1 class="text-gray-500">{{ props.description }}</h1>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
