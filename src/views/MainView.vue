<template>
  <section class="main">
    <div class="container">
      <ResourceLevel v-if="currentStep === 1" @next="nextStep" />
      <SelectPlace v-if="currentStep === 2" @next="nextStep" />
      <SelectDate v-if="currentStep === 3" @next="nextStep" />
      <ResultInfo v-if="currentStep === 4" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ResourceLevel from "@/components/ResourceLevel.vue";
import SelectPlace from "@/components/SelectPlace.vue";
import SelectDate from "@/components/SelectDate.vue";
import ResultInfo from "@/components/ResultInfo.vue";

const currentStep = ref(1);

function nextStep() {
  currentStep.value++;
}
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: calc(100% - 30px);
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 20px;
}
</style>
