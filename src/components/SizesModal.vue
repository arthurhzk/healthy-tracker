<template>
  <fwb-button @click="showModal"> Atualizar medidas </fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Controle de Medidas</div>
    </template>
    <template #body>
      <div class="flex flex-col gap-4">
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Peito"
          v-model="sizeState.chest"
        />
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Cintura"
          v-model="sizeState.waist"
        />
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Quadril"
          v-model="sizeState.hips"
        />
      </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Cancelar
        </fwb-button>
        <fwb-button @click="addData" color="green"> OK </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";
import TheInput from "./TheInput.vue";
import { useAddSizeData } from "@/composables/useAddSizeData";
const isShowModal = ref(false);

const { addSizeData, sizeState } = useAddSizeData();

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const addData = async () => {
  await addSizeData();
  closeModal();
};
</script>
