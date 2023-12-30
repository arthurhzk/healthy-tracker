<template>
  <Container>
    <TheBreadCrumb />
    <h1 class="flex items-center justify-center text-3xl font-semibold">
      Seja bem-vindo!
    </h1>
    <h1 class="text-3xl">Monitoramento de {{ userLogged }}</h1>
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
      <h1 class="text-3xl text-white">Calcule o seu IMC</h1>
      <div class="flex justify-center gap-4">
        <EightCard
          bg-color="bg-white"
          name="Peso"
          :value="getLastHeight"
          meter="kg"
        />
        <EightCard
          bg-color="bg-white"
          name="Altura"
          :value="getLastWeight"
          meter="cm"
        />
        <EightCard
          bg-color="bg-white"
          name="IMC"
          :value="calculateIMC || 0"
          meter="bmi"
        />
      </div>
      <MassModal />
    </Container>
  </div>
  <Container>
    <h1 class="text-3xl">Monitoramento de medidas</h1>
    <div class="flex justify-center gap-4">
      <EightCard
        bg-color="bg-gray-600 text-white"
        name="Peito"
        :value="getLastChestValue"
        meter="(in)"
      />
      <EightCard
        bg-color="bg-gray-600 text-white"
        name="Cintura"
        :value="getLastWaistValue"
        meter="(in)"
      />
      <EightCard
        bg-color="bg-gray-600 text-white"
        name="Quadril"
        :value="getLastHipsValue"
        meter="(in)"
      />
    </div>
    <SizesModal />
  </Container>
</template>

<script setup lang="ts">
import MonitoringCard from "@/components/MonitoringCard.vue";
import monitoringDataArray from "@/data/monitoringDataArray";
import Container from "@/components/Container.vue";
import TheModal from "@/components/TheModal.vue";
import TheBreadCrumb from "@/components/TheBreadCrumb.vue";
import EightCard from "@/components/EightCard.vue";
import MassModal from "@/components/MassModal.vue";
import { useFetchSizeData } from "@/composables/useFetchSizeData";
import { useFetchMassData } from "@/composables/useFetchMassData";
import { useCredentialsStore } from "@/stores/credentials";
const { getLastHeight, getLastWeight, calculateIMC } = useFetchMassData();
const { getLastChestValue, getLastHipsValue, getLastWaistValue } =
  useFetchSizeData();
import SizesModal from "@/components/SizesModal.vue";
const { userLogged } = useCredentialsStore();
</script>
