<template>
  <fwb-button @click="showModal">{{ props.name }}</fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Atualize os seus dados diariamente
      </div>
    </template>
    <template #body>
      <div class="flex flex-col items-center justify-center gap-4">
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Digite o valor da glicemia (mg/dL)"
          v-model="monitoringState.glicemy"
        >
          <BloodPressure />
        </TheInput>
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Digite o seu batimento cardíaco (bpm)"
          v-model="monitoringState.heart_beat"
        />
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Digite a sua pressão sanguínea (mmhg)"
          v-model="monitoringState.pressure"
        />
      </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Recusar
        </fwb-button>

        <fwb-button v-if="!isLoading" @click="addData" color="green"
          >Atualizar</fwb-button
        >
        <Spinning v-else />
      </div>
    </template>
  </fwb-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";
import { defineProps } from "vue";
import TheInput from "./TheInput.vue";
import { useAddMonitoringData } from "@/composables/useAddMonitoringData";

import Spinning from "./Spinning.vue";
import BloodPressure from "@/assets/icons/BloodPressure.vue";

const { monitoringState, addMonitoringData, isLoading } =
  useAddMonitoringData();

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const props = defineProps({
  name: String,
});

const addData = async () => {
  await addMonitoringData();

  isLoading.value = false;

  closeModal();
};
</script>
