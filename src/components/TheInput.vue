<template>
  <fwb-input :placeholder="props.placeholder" />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { FwbInput } from "flowbite-vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Placeholder",
  },
});
</script>
