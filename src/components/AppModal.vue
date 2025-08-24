<template>
  <teleport to="body">
    <div v-if="isVisible" class="app-modal-overlay" @click.self="closeModal">
      <div class="app-modal">
        <button class="app-modal__close-button" @click="closeModal">
          <CloseIcon />
        </button>
        <div class="app-modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';
  import CloseIcon from './icons/CloseIcon.vue'; 

  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(['close']);

  const closeModal = () => {
    emit('close');
  };
</script>

<style lang="scss" scoped>
  @use "@/styles/variables" as *;

  .app-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .app-modal {
    background-color: $color-bg-white;
    border-radius: 16px;
    box-shadow: $shadow-default;
    position: relative;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .app-modal__close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: $color-text-grey;
  }

  .app-modal__content {
    
  }
</style>