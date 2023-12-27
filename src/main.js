import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.js";

import enLocale from "./locales/en.json";
import ptBrLocale from "./locales/pt_BR.json";

const app = createApp(App);
app.use(router);
const messages = {
  en: enLocale,
  'pt_BR': ptBrLocale
};
const i18n = createI18n({
  locale: "pt_BR",
  messages: messages,
});
app.mount("#app");
app.use(i18n);
