<template>
  <div class="result">
    <h1 class="result__title">Благодарим за уделенное время!</h1>
    <p class="result__info">Ма рассмотрим Вашу заявку и свяжемся с Вами в ближайшее время для уточнения деталей :)</p>
    <button class="result__btn" @click="complete">Завершить</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

function complete() {
  router.push({ name: "TimeNotOver" });
}
</script>

<style scoped>
.result {
  color: #8b302d;
}
.result__title {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
}
.result__info {
  font-weight: 400;
  font-size: 12px;
}
.result__btn {
  display: block;
  background-color: #8b302d;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px 5px;
  width: 150px;
  font-weight: 600;
  margin-top: 15px;
  margin-left: auto;
  cursor: pointer;
}
</style>
