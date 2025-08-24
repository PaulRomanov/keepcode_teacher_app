<template>
  <div class="file-icon-wrapper">
    <PDFIcon v-if="fileType === 'pdf'" class="file-icon" />
    <JpgIcon v-else-if="fileType === 'jpg'" class="file-icon" />
    <DocIcon v-else-if="fileType === 'doc'" class="file-icon" />
    <XlsIcon v-else-if="fileType === 'xls'" class="file-icon" />
    <PDFIcon v-else class="file-icon" />
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import PDFIcon from './PDFIcon.vue';
  import JpgIcon from './JpgIcon.vue';
  import DocIcon from './DocIcon.vue';
  import XlsIcon from './XlsIcon.vue';

  const props = defineProps({
    fileType: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .file-icon {
    width: 45px; 
    height: 58px;
  }
</style>