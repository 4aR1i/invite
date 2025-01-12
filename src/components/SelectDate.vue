<template>
  <Spinner v-if="loading" />
  <div v-else class="date">
    <h1 class="date__title">Когда Вам удобно?</h1>
    <VueDatePicker v-model="date"></VueDatePicker>
    <button class="date__btn" @click="next">Отправить</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import { useInviteStore } from "@/store/useInviteStore";

type Emits = {
  next: [];
};

const emits = defineEmits<Emits>();
const inviteStore = useInviteStore();
const date = ref();
const loading = ref(false);

async function next() {
  inviteStore.invite.date = date.value;

  try {
    loading.value = true;
    const result = await inviteStore.sendEmail();
    if (result) {
      const now = new Date();
      localStorage.setItem("lastRequestTime", now.toISOString());
      emits("next");
    }
  } catch (error) {
    alert("Произошла ошибка при отправке. Попробуйте повторить позже.");
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.date__title {
  font-weight: 600;
  font-size: 16px;
  color: #8b302d;
  margin-bottom: 20px;
}
.date__btn {
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
