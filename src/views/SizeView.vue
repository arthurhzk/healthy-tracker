<template>
  <Container>
    <TheBreadCrumb />
    <fwb-table striped>
      <fwb-table-head>
        <fwb-table-head-cell>Data</fwb-table-head-cell>
        <fwb-table-head-cell>Peito</fwb-table-head-cell>
        <fwb-table-head-cell>Cintura</fwb-table-head-cell>
        <fwb-table-head-cell>Quadril</fwb-table-head-cell>
        <fwb-table-head-cell></fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-for="item in reverseMonitoringOrder">
          <fwb-table-cell>{{ formatDate(item.created_at) }}</fwb-table-cell>
          <fwb-table-cell>{{ item.chest }} cm </fwb-table-cell>
          <fwb-table-cell>{{ item.waist }} cm </fwb-table-cell>
          <fwb-table-cell>{{ item.hips }} cm</fwb-table-cell>
          <DeleteModal @delete-data="deleteData(item.id)"></DeleteModal>
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>
  </Container>
</template>

<script lang="ts" setup>
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import { useFetchSizeData } from "@/composables/useFetchSizeData";
import { onMounted, computed } from "vue";
import Container from "@/components/Container.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import TheBreadCrumb from "@/components/TheBreadCrumb.vue";
import { useDeleteSizeData } from "@/composables/useDeleteSizeData";
const { fetchSizeData, sizeMonitoring } = useFetchSizeData();
const { handleDeleteData } = useDeleteSizeData();
onMounted(() => {
  fetchSizeData();
});
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const deleteData = async (index: any) => {
  await handleDeleteData(index);
  fetchSizeData();
};

const reverseMonitoringOrder = computed(() => {
  return sizeMonitoring.value ? sizeMonitoring.value.slice().reverse() : [];
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
