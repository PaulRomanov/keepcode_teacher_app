<template>
  <button class="app-button" :class="`is-${color}`">
    <slot></slot>
  </button>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    color: {
      type: String,
      default: 'yellow', 
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/variables" as *;

  .app-button {
    padding: 10px 20px;
    color: $color-bg-white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    transition: background-color 0.2s ease-in-out;
    white-space: nowrap; 
    text-transform: uppercase;

    &.is-yellow {
      background-color: $color-button-yellow;

      &:hover {
        background-color: darken($color-button-yellow, 10%);
      }
    }

    &.is-blue {
      background-color: $color-bg-blue;

      &:hover {
        background-color: darken($color-bg-blue, 10%);
      }
    }
  }
</style>