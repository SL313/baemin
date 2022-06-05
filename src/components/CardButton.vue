<template>
  <div class="card-css">
    <div class="card-title">{{ title }}</div>
    <pre class="card-descript">{{ msg }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardButton",
  props: {
    title: String,
    msg: String,
  },
});
</script>

<style scoped>
.card-css {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 120px;
  margin-bottom: 15px;
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  text-align: left;
  padding: 15px;
  cursor: pointer;
}

.card-title {
  font-weight: bold;
  font-family: "BaeminHannaPro";
  font-size: 1.25em;
}

.card-descript {
  max-width: 70%;
  word-break: break-word;
  white-space: pre-wrap;
  font-size: 0.8em;
}

@media (min-width: 768px) {
  .card-title {
    font-size: 1.4em;
  }

  .card-descript {
    font-size: 1em;
  }
}
</style>
