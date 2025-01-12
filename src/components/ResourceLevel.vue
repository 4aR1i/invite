<template>
  <div class="resource">
    <h1 class="resource__title">
      Яна Владимировна, оцените ваш ресурс сегодня от 0 до 10 (где 0 - не могу встать с кровати, а 10 - я за любой
      кипишь)
    </h1>
    <div class="resource__slider slider">
      <div class="slider__title">Ресурс: {{ resource }}</div>
      <input type="range" min="0" max="10" :value="resource" class="slider__range" @change="change" />
      <span class="slider__hint">(Минимальный уровень ресурса для продолжения 7)</span>
    </div>
    <button class="resource__btn" @click="next" :disabled="disabled">Продолжить</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useInviteStore } from "@/store/useInviteStore";

type Emits = {
  next: [];
};

const emits = defineEmits<Emits>();
const inviteStore = useInviteStore();
const resource = ref(0);
const disabled = computed(() => resource.value < 7);

function change(e: Event) {
  const target = e.target as HTMLInputElement;
  resource.value = Number(target.value);
}

function next() {
  inviteStore.invite.resource = resource.value;
  emits("next");
}
</script>

<style scoped>
.resource__title {
  font-weight: 600;
  font-size: 16px;
  color: #8b302d;
  margin-bottom: 20px;
}
.resource__btn {
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
.resource__btn:disabled {
  background-color: #e95954;
  cursor: not-allowed;
}
.resource__btn:active {
  background-color: #64211e;
}
.slider {
  width: 100%;
}
.slider__title {
  color: #8b302d;
}
.slider__range {
  width: 100%;
  cursor: pointer;
}
.slider__hint {
  font-size: 12px;
  color: #8b302d;
}
</style>
