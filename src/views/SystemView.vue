<template>
  <Container>
    <h1 class="flex items-center justify-center text-3xl font-semibold">
      Seja bem-vindo!
    </h1>
    <h1 class="text-3xl">Monitoramento de {{ state.email }}</h1>
    <TheModal name="Atualizar monitoramento" />
    <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
      <MonitoringCard
        v-for="monitoringData in monitoringDataArray"
        :name="monitoringData.name"
        :meter="monitoringData.meter"
        :value="monitoringData.value"
        :status="monitoringData.status"
      >
        <template #icon>
          <component :is="monitoringData.icon" />
        </template>
        <template #chart>
          <component :is="monitoringData.chart" />
        </template>
      </MonitoringCard>
    </div>

    <div
      class="flex flex-col items-center justify-center gap-4 md:flex-row"
    ></div>
  </Container>
  <div class="bg-gray-600 w-full">
    <Container>
      <h1 class="text-white font-bold text-2xl">Calculadora de IMC</h1>
      <div class="flex justify-center gap-4">
        <EightCard name="Peso" :value="getLastHeight" meter="kg" />
        <EightCard name="Altura" :value="getLastWeight" meter="cm" />
      </div>
      <MassModal color="default"></MassModal>
    </Container>
    <i :class="compareHeight"></i>
  </div>
</template>

<script setup lang="ts">
import MonitoringCard from "@/components/MonitoringCard.vue";
import monitoringDataArray from "@/data/monitoringDataArray";
import Container from "@/components/Container.vue";
import TheModal from "@/components/TheModal.vue";
import { useMonitoringStore } from "@/stores/monitoring";
import EightCard from "@/components/EightCard.vue";
import MassModal from "@/components/MassModal.vue";
import { useFetchMassData } from "@/composables/useFetchMassData";
import { computed } from "vue";
const { state } = useMonitoringStore();
const { fetchMassData, getLastHeight, getLastWeight, massMonitoring } =
  useFetchMassData();

fetchMassData();

const compareHeight = computed(() => {
  if (massMonitoring.value && massMonitoring.value.length >= 2) {
    const lastHeight =
      massMonitoring.value[massMonitoring.value.length - 1].height;
    const beforeLastHeight =
      massMonitoring.value[massMonitoring.value.length - 2].height;

    if (lastHeight > beforeLastHeight) {
      return "fa-solid fa-gears";
    } else {
      return "fa-solid fa-gears";
    }
  }
  return null;
});
</script>
