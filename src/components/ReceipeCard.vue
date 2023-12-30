<template>
  <div class="p-4">
    <img class="w-[300px] h-[250px]" :src="props.receipe.image" alt="" />
    <h5
      class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ props.receipe.title }}
    </h5>

    <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
      {{ props.receipe.calories }} calories
    </p>
  </div>
</template>

<script setup lang="ts">
import { FwbCard } from "flowbite-vue";
import { defineProps } from "vue";

const props = defineProps({
  receipe: {
    type: Object,
    required: true,
  },
});
</script>
