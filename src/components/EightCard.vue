<template>
  <section
    :class="weightColor"
    class="w-[187px] h-[82px] rounded-xl p-3 mt-[32px] bg-white"
  >
    <div class="flex justify-around">
      <h3 class="font-bold">{{ props.name }}</h3>
      <h3>{{ props.value }} {{ props.meter }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  value: Number,
  meter: String,
  weightColor: String,
});
</script>
