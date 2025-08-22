<template>
  <header class="app-header">
    <div class="app-header__breadcrumbs">
      <span class="app-header__breadcrumb-item">Главная</span>
      <span class="app-header__breadcrumb-separator">/</span>
      <span class="app-header__breadcrumb-item">Ученики</span>
      <span class="app-header__breadcrumb-separator">/</span>
      <span class="app-header__breadcrumb-item fc-secondary">Документы</span>
    </div>
    <div class="app-header__user-controls">
      <div class="app-header__user-info">
        <img src="/avatar.png" alt="User Avatar" class="app-header__avatar">
        <span class="app-header__user-name">Name_user</span>
      </div>
      <div class="app-header__user-controls-items">
        <SettingsIcon class="app-header__icon" />
        <LogOutIcon class="app-header__icon" />
      </div>
    </div>
  </header>
</template>

<script setup>
  import SettingsIcon from './icons/SettingsIcon.vue';
  import LogOutIcon from './icons/LogOutIcon.vue';
</script>

<style lang="scss" scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
    background-color: $color-bg-white;
    height: 72px;

    &__breadcrumbs {
      display: flex;
      gap: 6px;
      font-weight: 300;
      font-size: 14px;
    }

    &__user-controls {
      display: flex;
      align-items: center;
      gap: 53px;
    }

    &__user-controls-items {
      display: flex;
      gap: 33px;
    }

    &__icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    &__user-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>