<template>
  <button class="app-button" :class="`is-${color}`" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    color: {
      type: String,
      default: 'yellow',
    },
  });

  const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
  @use "@/styles/variables" as *;
  @use "sass:color";

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
        background-color: color.adjust($color-button-yellow, $lightness: -10%);
      }
    }

    &.is-blue {
      background-color: $color-bg-blue;

      &:hover {
        background-color: color.adjust($color-bg-blue, $lightness: -10%);
      }
    }
  }
</style>