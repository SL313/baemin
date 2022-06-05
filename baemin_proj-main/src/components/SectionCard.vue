<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionCard",
});
</script>

<style scoped>
div {
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 15px;
}
</style>
