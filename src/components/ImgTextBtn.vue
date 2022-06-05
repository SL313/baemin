<template>
  <div class="contains">
    <img :src="imgUrl" /><br />
    <div class="text">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ImageTextButton",
  props: {
    title: String,
    imgUrl: String,
  },
});
</script>

<style scoped>
img {
  width: 36px;
  margin: 15px;
}
div.text {
  display: inline-block;
  text-align: center;
  font-family: "BaeminHannaPro";
  font-weight: bold;
  width: 100%;
  font-size: 0.8em;
}
div.contains {
  padding: 10px;
  display: inline-block;
}
@media (min-width: 768px) {
  img {
    width: 64px;
  }
  div.text {
    font-size: 1em;
  }
}
</style>
