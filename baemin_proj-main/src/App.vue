<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/basket">Basket</router-link> |
    <router-link to="/store">Store</router-link>
  </nav> -->
  <b-container class="bv-example-row">
    <router-view />
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { initPayment } from "@/store";
import { useDispath } from "./helpers";

export default defineComponent({
  name: "App",

  data() {
    return {
      dispatch: useDispath(),
    };
  },

  mounted() {
    this.dispatch(initPayment({}));
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  /* https://www.woowahan.com/fonts */
  /* https://www.woowahan.com/fonts/license */
  font-family: "BaeminHannaPro";
  src: local("BaeminHannaPro"), url(./assets/BMHANNAPro.ttf) format("truetype");
}
</style>
