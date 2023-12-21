<template>
  <fwb-breadcrumb solid>
    <router-link to="/system">
      <fwb-breadcrumb-item home href="#">
        Home
      </fwb-breadcrumb-item></router-link
    >
    <router-link to="/table">
      <fwb-breadcrumb-item href="#">
        Relatórios
      </fwb-breadcrumb-item></router-link
    >
    <router-link to="/chat">
      <fwb-breadcrumb-item> ChatBot </fwb-breadcrumb-item></router-link
    >
  </fwb-breadcrumb>
</template>

<script lang="ts" setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from "flowbite-vue";
</script>
