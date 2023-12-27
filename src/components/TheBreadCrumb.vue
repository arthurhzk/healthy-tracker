<template>
  <fwb-breadcrumb solid>
    <router-link to="/system">
      <fwb-breadcrumb-item home href="#">
        Home
      </fwb-breadcrumb-item></router-link
    >
    <router-link to="/monitoring">
      <fwb-breadcrumb-item href="#">
        Relatório de monitoramento
      </fwb-breadcrumb-item></router-link
    >
    <router-link to="/mass">
      <fwb-breadcrumb-item href="#">
        Relatório de IMC
      </fwb-breadcrumb-item></router-link
    >
    <router-link to="/size">
      <fwb-breadcrumb-item href="#">
        Relatórios de medidas
      </fwb-breadcrumb-item></router-link
    >
  </fwb-breadcrumb>
</template>

<script lang="ts" setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from "flowbite-vue";
</script>
