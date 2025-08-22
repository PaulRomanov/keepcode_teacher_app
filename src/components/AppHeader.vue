<template>
  <header class="app-header">
    <div class="app-header__breadcrumbs">
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link
          :to="breadcrumb.to"
          class="app-header__breadcrumb-item"
          :class="{
            'is-active-breadcrumb': breadcrumbs.length > 1 && index === breadcrumbs.length - 1,
          }"
        >
          {{ breadcrumb.text }}
        </router-link>
        <span v-if="index < breadcrumbs.length - 1" class="app-header__breadcrumb-separator">/</span>
      </template>
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
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import SettingsIcon from './icons/SettingsIcon.vue';
  import LogOutIcon from './icons/LogOutIcon.vue';

  const route = useRoute();
  const breadcrumbs = ref([]);


  watch(() => route.matched, (newMatched) => {
    const newBreadcrumbs = [];
    newBreadcrumbs.push({ text: 'Главная', to: '/' });
    newMatched.forEach((match) => {
      if (match.meta.breadcrumb && match.path !== '/') {
        newBreadcrumbs.push({
          text: match.meta.breadcrumb,
          to: match.path,
        });
      }
    });

    breadcrumbs.value = newBreadcrumbs;
  }, { immediate: true });
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

    &__breadcrumb-item {
      text-decoration: none;
      color: $color-text-dark;
      text-shadow: $shadow-default;

      &.is-active-breadcrumb {
        color: $color-text-grey-light;
      }
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