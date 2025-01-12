<template>
  <section class="auth">
    <div class="auth__form">
      <h1 class="auth__title">Вход</h1>
      <input v-model="authData.login" type="text" placeholder="Логин" class="auth__input" @focus="error = ''" />
      <input v-model="authData.password" type="password" placeholder="Пароль" class="auth__input" @focus="error = ''" />
      <p v-if="error" class="auth__error">{{ error }}</p>
      <button class="auth__btn" @click="login">Войти</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { TAuth, useAuthStore } from "@/store/useAuthStore";

const router = useRouter();
const authStore = useAuthStore();
const authData = ref<TAuth>({
  login: "",
  password: "",
});
const error = ref("");

function login() {
  const result = authStore.login(authData.value);

  if (result) {
    router.push({ name: "Main" });
  } else {
    error.value = "Неверный логин или пароль.";
  }
}
</script>

<style scoped>
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth__form {
  width: calc(100% - 30px);
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth__title {
  font-weight: 600;
  font-size: 30px;
  color: #8b302d;
  margin-bottom: 20px;
}
.auth__input {
  background-color: #ffffff;
  border-radius: 10px;
  color: #8b302d;
  outline: none;
  border: none;
  padding: 10px;
  width: 100%;
  max-width: 250px;
  font-size: 16px;
}
.auth__input:first-of-type {
  margin-bottom: 15px;
}
.auth__input::placeholder {
  color: #8b302d;
}
.auth__btn {
  background-color: #8b302d;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px;
  width: 100%;
  max-width: 250px;
  font-weight: 600;
  margin-top: 15px;
  cursor: pointer;
}
.auth__btn:active {
  background-color: #64211e;
}
.auth__error {
  color: #8b302d;
}
</style>
