<template>
  <div class="placeholder-page">
    <h2>Эта страница в процессе разработки</h2>
    <p>попробуйте перейти на страницу "Ученики"</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "@/styles/variables" as *;

  .placeholder-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: $color-bg-blue;
  }
</style>