<template>
  <div class="student-filter">
    <div class="student-filter__select-wrapper">
      <label class="student-filter__select-label">Тип документа</label>
      <select class="student-filter__select">
        <option value="">Не выбрано</option>
        <option value="">Договор</option>
        <option value="">Справка</option>
        <option value="">Другое</option>
      </select>
    </div>
    <div class="student-filter__select-wrapper">
      <label class="student-filter__select-label">Статус</label>
      <select class="student-filter__select">
        <option value="">Не выбрано</option>
        <option value="">Заключен</option>
        <option value="">Расторгнут</option>
      </select>
    </div>
    <div class="student-filter__select-wrapper">
      <label class="student-filter__select-label">Сортировать по</label>
      <select class="student-filter__select student-filter__select-data">
        <option value="date">Дате</option>
        <option value="date">более новые</option>
        <option value="date">более старые</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>

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
