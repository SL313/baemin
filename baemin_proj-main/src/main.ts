import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap' asdfasd

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXZhOPR0GeDk10-J9Yl6K9YWAEI_OqxY",
  authDomain: "baemin-vue.firebaseapp.com",
  projectId: "baemin-vue",
  storageBucket: "baemin-vue.appspot.com",
  messagingSenderId: "805734936503",
  appId: "1:805734936503:web:372284efc45c5cf97c8232",
  measurementId: "G-L40L9QRPF6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { createRedux } from "./storePlugin";
import { store } from "./store";

import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(BootstrapIconsPlugin)
  .use(createRedux(store))
  .mount("#app");
