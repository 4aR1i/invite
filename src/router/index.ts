import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import AuthForm from "@/components/AuthForm.vue";
import TimeNotOver from "@/components/TimeNotOver.vue";
import { useAuthStore } from "@/store/useAuthStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Main",
      path: "/",
      component: MainView,
    },
    {
      name: "Login",
      path: "/login",
      component: AuthForm,
    },
    {
      name: "TimeNotOver",
      path: "/time",
      component: TimeNotOver,
    },
  ],
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  authStore.checkAuthFromLS();

  const lastRequestTime = localStorage.getItem("lastRequestTime");
  const now = new Date();

  let isTimeNotOver = false;
  if (lastRequestTime) {
    const lastDate = new Date(lastRequestTime);
    const diffInHours = Math.abs(Number(now) - Number(lastDate)) / 36e5;
    isTimeNotOver = diffInHours < 24;
  }

  if (authStore.isAuthenticated && to.name === "Login") {
    next({ name: "Main" });
  } else if (
    (!authStore.isAuthenticated && to.name !== "Login") ||
    (!authStore.isAuthenticated && to.name === "Login")
  ) {
    next({ name: "Login" });
  } else if (!isTimeNotOver && to.name === "TimeNotOver") {
    next({ name: "Main" });
  } else if ((isTimeNotOver && to.name !== "TimeNotOver") || (isTimeNotOver && to.name === "TimeNotOver")) {
    next({ name: "TimeNotOver" });
  } else {
    next();
  }
});

export default router;
