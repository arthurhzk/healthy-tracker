<template>
  <fwb-card
    class="h-1/4 md:m-auto"
    img-alt="Desk"
    :img-src="props.receipe.image"
    variant="image"
  >
    <div class="p-5">
      <h5
        class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ props.receipe.title }}
      </h5>
      <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
        {{ props.receipe.calories }} calories
      </p>
    </div>
  </fwb-card>
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
