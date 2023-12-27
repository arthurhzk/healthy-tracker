<template>
  <Container>
    <TheBreadCrumb />
    <fwb-table striped>
      <fwb-table-head>
        <fwb-table-head-cell>Data</fwb-table-head-cell>
        <fwb-table-head-cell>Glicemia</fwb-table-head-cell>
        <fwb-table-head-cell>Batimentos</fwb-table-head-cell>
        <fwb-table-head-cell>Pressão</fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-for="item in reverseMonitoringOrder">
          <fwb-table-cell>{{ formatDate(item.created_at) }}</fwb-table-cell>
          <fwb-table-cell>{{ item.glicemy }} mg/dL</fwb-table-cell>
          <fwb-table-cell>{{ item.heart_beat }} bpm</fwb-table-cell>
          <fwb-table-cell>{{ item.pressure }} hhng</fwb-table-cell>
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
import { useFetchMonitoringData } from "@/composables/useFetchMonitoringData";
import { onMounted, computed } from "vue";
import Container from "@/components/Container.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import TheBreadCrumb from "@/components/TheBreadCrumb.vue";
import { useDeleteMonitoringData } from "@/composables/useDeleteMonitoringData";
const { fetchMonitoringData, monitoring } = useFetchMonitoringData();
const { handleDeleteData } = useDeleteMonitoringData();
onMounted(() => {
  fetchMonitoringData();
});
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const deleteData = async (index: any) => {
  await handleDeleteData(index);
  fetchMonitoringData();
};

const reverseMonitoringOrder = computed(() => {
  return monitoring.value ? monitoring.value.slice().reverse() : [];
});
</script>
