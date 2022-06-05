<template>
  <div v-bind:style="{ fontWeight: isBold ? 'bold' : 'normal' }">
    <b-row>
      <b-col style="text-align: left">{{ text }}</b-col>
      <b-col style="text-align: right"
        >{{ (cost || 0).toLocaleString() }}원</b-col
      >
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PayCol",

  props: {
    text: String,
    cost: Number,
    isBold: Boolean,
  },
});
</script>
