import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import "./style.css";

const app = createApp(App);
const pinia = createPinia();

app.component("VueDatePicker", VueDatePicker);
app.use(pinia).use(router).mount("#app");
