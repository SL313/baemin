<template>
  <div>
    <b-row>
      <b-col cols="4">
        <store-big-card></store-big-card>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import StoreBigCard from "./StoreBigCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StoreBigCardGrid",
  components: {
    StoreBigCard,
  },
});
</script>

<style scoped></style>
