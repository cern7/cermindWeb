import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import i18n from "./i18n";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.use(i18n);
app.mount("#app");
