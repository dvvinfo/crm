import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize";
import MessagePlugin from "@/utils/messagePlugin";

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


firebase.initializeApp({
    apiKey: "AIzaSyCPG65dKgwzINidV9yGM3SBelDiuy__TgU",
    authDomain: "vue-crm-d7709.firebaseapp.com",
    projectId: "vue-crm-d7709",
    storageBucket: "vue-crm-d7709.appspot.com",
    messagingSenderId: "99409685400",
    appId: "1:99409685400:web:5f048c5f24dae527fbd9ed",
    measurementId: "G-DGQFJCSL46"
  })

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(store).use(MessagePlugin).use(router).mount("#app");
    }
    
})


