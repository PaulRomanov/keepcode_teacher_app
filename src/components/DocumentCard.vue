<template>
  <div class="document-card">
    <div class="document-card__info">
        <span class="document-card__type">
          {{ document.title }}<template v-if="document.number"> №{{ document.number }}</template>
        </span>
        <div 
           v-show="document.type === 'Договор'"
           class="document-card__status-wrapper">
           <div
             class="document-card__status-square"
             :class="{
               'is-active': document.status === 'Заключен',
               'is-inactive': document.status === 'Расторгнут',
             }"
           ></div>
           <span class="document-card__status-text">{{ document.status }}</span>
        </div>
        <span class="document-card__date-range">{{ document.dateFrom }} - {{ document.dateTo }}</span>
        <div class="document-card__actions">
          <PrinterleIcon class="document-card__action-icon" />
          <EditIcon class="document-card__action-icon" />
          <BinIcon class="document-card__action-icon" @click="handleDelete" />
        </div>
    </div>
    <div class="document-card__icon-wrapper">
      <FileIcon :fileType="document.fileType" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import BinIcon from "./icons/BinIcon.vue";
import EditIcon from "./icons/EditIcon.vue";
import PrinterleIcon from "./icons/PrinterleIcon.vue";
import FileIcon from './icons/FileIcon.vue';
import { useDocumentStore } from '@/stores/documents';

const props = defineProps({
  document: {
    type: Object,
    required: true,
  },
});

const documentStore = useDocumentStore();

const handleDelete = () => {
  documentStore.deleteDocument(props.document.id);
};
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as *;

.document-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: $color-bg-white;
  border-radius: 16px;
  box-shadow: $shadow-default;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: space-between;
    height: 100%;
  }

  &__type {
    font-size: 24px;
    font-weight: 700;
  }

  &__status-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__status-square {
    width: 9px;
    height: 9px;
    border-radius: 2px;

    &.is-active {
      background-color: $color-status-green;
    }

    &.is-inactive {
      background-color: $color-status-orange;
    }
  }

  &__status-text {
    font-size: 18px;
  }

  &__date-range {
    font-size: 18px;
    color: $color-text-grey;
  }

  &__actions {
    display: flex;
    gap: 30px;
    margin-top: 10px;
  }

  &__action-icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 117px;
    height: 117px;
    background-color: $color-bg-light;
    border-radius: 10px;
  }
}
</style>
