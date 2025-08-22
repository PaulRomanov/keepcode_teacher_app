<template>
  <li class="sidebar-link">
    <router-link :to="to" class="sidebar-link__item" :class="{ 'is-active': isActive }">
      <slot name="icon" />
      <span class="sidebar-link__text">
        <slot name="text" />
      </span>
    </router-link>
  </li>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/variables" as *;

  .sidebar-link {
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2px;
      padding: 21px 20px;
      text-decoration: none;
      color: $color-bg-white;
      transition: background-color 0.2s ease-in-out, font-weight 0.2s ease-in-out;

      &:hover {
        background-color: $color-bg-blue-hover;
      }

      &.is-active {
        background-color: $color-bg-blue-hover;
      }
    }
  }
</style>