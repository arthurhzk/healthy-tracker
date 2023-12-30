<template>
  <div class="mt-2 ml-3">
    <fwb-button color="red" @click="showModal"> Deletar </fwb-button>

    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">Deletar registro</div>
      </template>
      <template #body>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Deseja realmente deletar este registro?
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Esta ação não poderá ser desfeita.
        </p>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <fwb-button @click="closeModal" color="alternative">
            Cancelar
          </fwb-button>
          <fwb-button @click="handleDeleteData" color="green">
            Aceitar
          </fwb-button>
        </div>
      </template>
    </fwb-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";
const emit = defineEmits(["deleteData"]);
const isShowModal = ref(false);

function handleDeleteData() {
  closeModal();
  emit("deleteData");
}
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
</script>
