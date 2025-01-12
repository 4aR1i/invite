import { defineStore } from "pinia";
import authMock from "@/mocks/auth.json";

type TAuthStore = {
  isAuthenticated: boolean;
};

export type TAuth = {
  login: string;
  password: string;
};

export const useAuthStore = defineStore("auth", {
  state: (): TAuthStore => ({
    isAuthenticated: false,
  }),
  actions: {
    login(authData: TAuth) {
      if (authData.login === authMock.login && authData.password === authMock.password) {
        this.isAuthenticated = true;
        localStorage.setItem("isAuth", "true");
        return true;
      }
      return false;
    },
    checkAuthFromLS() {
      const isAuth = localStorage.getItem("isAuth");

      if (isAuth) {
        this.isAuthenticated = true;
      }
    },
  },
});
