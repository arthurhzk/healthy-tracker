<template>
  <Container>
    <TheBreadCrumb />
    <fwb-table striped>
      <fwb-table-head>
        <fwb-table-head-cell>Data</fwb-table-head-cell>
        <fwb-table-head-cell>Peso</fwb-table-head-cell>
        <fwb-table-head-cell>Altura</fwb-table-head-cell>
        <fwb-table-head-cell>Cálculo IMC</fwb-table-head-cell>
        <fwb-table-head-cell></fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-for="item in reverseMonitoringOrder">
          <fwb-table-cell>{{ formatDate(item.created_at) }}</fwb-table-cell>
          <fwb-table-cell>{{ item.weight }} kg</fwb-table-cell>
          <fwb-table-cell>{{ item.height }} cm</fwb-table-cell>
          <fwb-table-cell>{{ item.imc_value }} bmi</fwb-table-cell>
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
import { useFetchMassData } from "@/composables/useFetchMassData";
import { onMounted, computed } from "vue";
import Container from "@/components/Container.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import TheBreadCrumb from "@/components/TheBreadCrumb.vue";
import { useDeleteMassData } from "@/composables/useDeleteMassData";
const { fetchMassData, massMonitoring } = useFetchMassData();
const { handleDeleteData } = useDeleteMassData();
onMounted(() => {
  fetchMassData();
});
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const deleteData = async (index: any) => {
  await handleDeleteData(index);
  fetchMassData();
};

const reverseMonitoringOrder = computed(() => {
  return massMonitoring.value ? massMonitoring.value.slice().reverse() : [];
});
</script>
