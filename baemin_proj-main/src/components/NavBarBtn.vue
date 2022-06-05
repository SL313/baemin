<template>
  <div v-bind:class="[isActive ? 'focused' : 'normal']">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBarBtn",
  props: {
    isActive: Boolean,
    title: String,
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}

div.focused {
  display: inline-block;
  padding: 10px 15px;
  background-color: #2ac1bc;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  font-family: "BaeminHannaPro";
}

div.normal {
  display: inline-block;
  padding: 10px 15px;
  color: #999;
  border-radius: 15px;
  font-family: "BaeminHannaPro";
}
</style>
