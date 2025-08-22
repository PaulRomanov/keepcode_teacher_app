<template>
  <div class="app-layout">
    <AppSidebar />
    <div class="app-layout__content-wrapper">
      <AppHeader />
      <main class="app-layout__main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
</script>

<style lang="scss">
.app-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

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