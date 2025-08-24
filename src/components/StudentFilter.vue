<template>
  <div class="student-filter">
    <div class="student-filter__select-wrapper">
      <label class="student-filter__select-label">Тип документа</label>
      <select v-model="selectedType" class="student-filter__select">
        <option value="">Не выбрано</option>
        <option value="Договор">Договор</option>
        <option value="Справка">Справка</option>
        <option value="Анкета">Анкета</option>
      </select>
    </div>
    <div class="student-filter__select-wrapper">
      <label class="student-filter__select-label">Статус</label>
      <select v-model="selectedStatus" class="student-filter__select">
        <option value="">Не выбрано</option>
        <option value="Заключен">Заключен</option>
        <option value="Расторгнут">Расторгнут</option>
      </select>
    </div>
    <div class="student-filter__select-wrapper">
      <label class="student-filter__select-label">Сортировать по</label>
      <select v-model="selectedSort" class="student-filter__select student-filter__select-data">
        <option value="newest">более новые</option>
        <option value="oldest">более старые</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:filters']);

const selectedType = ref('');
const selectedStatus = ref('');
const selectedSort = ref('newest');

watch([selectedType, selectedStatus, selectedSort], () => {
  emit('update:filters', {
    type: selectedType.value,
    status: selectedStatus.value,
    sort: selectedSort.value,
  });
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as *;

.student-filter {
  display: flex;
  align-items: flex-start;
  gap: 155px;

  &__select-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 5px;
  }

  &__select-label {
    font-size: 14px;
    color: $color-text-grey;
  }

  &__select {
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 18px;
    color: $color-bg-blue;
    appearance: none; 
    background-image: url("/arrow.svg"); 
    background-repeat: no-repeat;
    padding-right: 16px; 
    background-position: right 0 center;
  }

  &__select-data {
    width: 50%;
  }
}
</style>
