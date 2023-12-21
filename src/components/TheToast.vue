<template>
  <fwb-toast closable> You've unlocked achievement. </fwb-toast>
  <fwb-toast closable type="warning"> Improve password difficulty. </fwb-toast>
  <fwb-toast closable type="success"> Item moved successfully. </fwb-toast>
  <fwb-toast closable type="danger"> Item has been deleted. </fwb-toast>
</template>

<script lang="ts" setup>
import { FwbToast } from "flowbite-vue";
</script>
