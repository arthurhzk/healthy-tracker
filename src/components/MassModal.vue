<template>
  <fwb-button @click="showModal"> Atualizar IMC </fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Calcule o seu IMC</div>
    </template>
    <template #body>
      <div class="flex flex-col gap-4">
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Digite a sua altura (cm)"
          v-model="massState.height"
        />
        <TheInput
          class="w-[300px] mx-auto"
          type="number"
          placeholder="Digite o seu peso (kg)"
          v-model="massState.weight"
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
import { useAddMassData } from "@/composables/useAddMassData";
const isShowModal = ref(false);

const { addMassData, massState } = useAddMassData();

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const addData = async () => {
  await addMassData();
  closeModal();
};
</script>
