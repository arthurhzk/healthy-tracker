<template>
  <section
    class="w-[280px] h-[300px] rounded-xl border border-customGray p-[20px]"
  >
    <div class="space-y-4">
      <div class="flex justify-around gap-4">
        <div
          :class="{ 'bg-green-100': props.name === 'Pressão arterial' }"
          class="w-[58px] h-[58px] rounded-lg flex items-center justify-center"
        >
          <slot name="icon"></slot>
        </div>
        <h2 class="text-xl">{{ props.name }}</h2>
      </div>
      <div class="flex items-center gap-2">
        <h3 class="text-xl">{{ props.value }}</h3>
        <h5>{{ props.secondValue }}</h5>
        <h5 class="font-semibold">{{ props.meter }}</h5>
      </div>

      <h6>{{ props.status }}</h6>
    </div>

    <slot name="chart"></slot>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: String,
  value: Number,
  secondValue: Number,
  meter: String,
  status: String,
});
</script>
