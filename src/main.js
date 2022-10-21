import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize";
import MessagePlugin from "@/utils/messagePlugin";

createApp(App).use(store).use(MessagePlugin).use(router).mount("#app");
