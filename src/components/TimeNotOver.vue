<template>
  <div class="time-not-over">
    <div class="time-not-over__content">
      Следующую заявку можно будет отправить через:
      <b>{{ formattedTime }}</b>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const timeLeft = ref(0);
const formattedTime = ref("");

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    secs.toString().padStart(2, "0"),
  ].join(":");
}

let timer: any;

onMounted(() => {
  const lastRequestTime = localStorage.getItem("lastRequestTime");

  if (lastRequestTime) {
    const now = new Date();
    const lastRequestDate = new Date(lastRequestTime);

    const diffInSeconds = Math.max(24 * 3600 - Math.floor((now.getTime() - lastRequestDate.getTime()) / 1000), 0);

    timeLeft.value = diffInSeconds;

    timer = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
        formattedTime.value = formatTime(timeLeft.value);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  } else {
    formattedTime.value = "00:00:00";
  }
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.time-not-over {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.time-not-over__content {
  width: calc(100% - 30px);
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #8b302d;
}
</style>
