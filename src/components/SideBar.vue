<template>
  <fwb-navbar>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <div class="flex flex-col gap-4 md:flex-row">
          <TheBreadCrumb />
        </div>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script lang="ts" setup>
import { FwbNavbar, FwbNavbarCollapse } from "flowbite-vue";
import TheBreadCrumb from "@/components/TheBreadCrumb.vue";
</script>
