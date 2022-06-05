<template>
  <b-row style="min-height: 48px">
    <b-col style="text-align: left">
      <span
        style="
          transform: translateY(20%);
          display: inline-block;
          font-size: 1.6em;
          font-weight: bold;
          cursor: pointer;
        "
        v-bind:style="{ color: color }"
      >
        <BIconArrowLeftShort />
      </span>
    </b-col>
    <b-col>
      <address-selector-btn
        v-if="address"
        style="transform: translateY(70%)"
        :address="address"
        :color="color"
      ></address-selector-btn>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddressSelectorBtn from "./AddressSelectorBtn.vue";

export default defineComponent({
  name: "InAppTopBar",

  components: {
    AddressSelectorBtn,
  },

  props: {
    address: String,
    color: {
      type: String,
      default: "black",
    },
  },
});
</script>

<style scoped></style>
