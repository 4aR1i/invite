<template>
  <div class="place">
    <h1 class="place__title">Чем бы Вы хотели заняться?</h1>
    <div class="place__list">
      <div
        v-for="place in places"
        :key="place.title"
        class="place__card"
        :style="{ backgroundColor: place.background }"
        @click="next(place.title)"
      >
        <span>{{ place.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInviteStore } from "@/store/useInviteStore";

type Emits = {
  next: [];
};

const emits = defineEmits<Emits>();
const inviteStore = useInviteStore();

const places = [
  { title: "Прогуляться", description: "", background: "#9da4cb" },
  { title: "Покушать", description: "", background: "#f0b6ac" },
  { title: "Сходить в кино", description: "", background: "#afb0c6" },
  { title: "Выпить кофе", description: "", background: "#648a79" },
  { title: "Свой вариант", description: "", background: "#d1b0a9" },
];

async function next(place: string) {
  inviteStore.invite.place = place;
  emits("next");
}
</script>

<style scoped>
.place__title {
  font-weight: 600;
  font-size: 16px;
  color: #8b302d;
  margin-bottom: 20px;
}
.place__list {
  display: flex;
  gap: 15px;
  overflow-x: auto;
}
.place__card {
  height: 300px;
  min-width: 180px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  align-content: center;
  color: #ffffff;
  outline: 1px solid #ffffff;
  outline-offset: -6px;
  cursor: pointer;
}
.place__card span {
  font-size: 20px;
  font-weight: 600;
}
</style>
