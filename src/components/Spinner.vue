<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.spinner-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #8b302d;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s ease-in 1s infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
