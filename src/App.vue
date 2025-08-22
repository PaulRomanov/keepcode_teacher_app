<template>
  <div class="app-layout">
    <aside class="app-layout__sidebar">
    </aside>
    <div class="app-layout__content-wrapper">
      <AppHeader />
      <main class="app-layout__main-content">
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
</script>

<style lang="scss">
.app-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  &__sidebar {
    width: 138px;
    flex-shrink: 0;
    background-color: $color-bg-blue;
  }

  &__content-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  &__main-content {
    padding: 24px;
    flex-grow: 1;
  }
}
</style>