import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(router).use(BootstrapVue3).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9EZoxeTWxS8ZiwZottUw_lLg-qkRCbWE",
  authDomain: "baemin-6cd83.firebaseapp.com",
  projectId: "baemin-6cd83",
  storageBucket: "baemin-6cd83.appspot.com",
  messagingSenderId: "969912316432",
  appId: "1:969912316432:web:516dc22dc347c23554d095",
  measurementId: "G-BKXSDXVJ5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
