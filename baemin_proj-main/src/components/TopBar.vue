<template>
  <div class="top-bar">
    <b-row style="margin-bottom: 15px">
      <b-col style="text-align: start">
        <BIconBell />
      </b-col>
      <b-col>
        <address-selector-btn :address="'방이동'"></address-selector-btn>
      </b-col>
      <b-col style="text-align: end">
        <BIconGrid />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend is-text>
            <BIconSearch />
          </b-input-group-prepend>
          <b-form-input type="search" placeholder="Search terms"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AddressSelectorBtn from "./AddressSelectorBtn.vue";

export default defineComponent({
  name: "TopBar",

  components: {
    AddressSelectorBtn,
  },
});
</script>

<style scoped>
.top-bar {
  background-color: #2ac1bc;
  height: 100px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: white;
  padding: 15px;
}
</style>
