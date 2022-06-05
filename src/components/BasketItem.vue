<template>
  <div style="margin-bottom: 15px">
    <b-row style="margin-bottom: 15px">
      <b-col>
        <div>{{ id }}</div>
      </b-col>
      <b-col style="text-align: right">
        <BIconXLg style="cursor: pointer" @click="onDeleteClicked()" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2" md="4" lg="5">
        <div class="food-img"></div>
      </b-col>
      <b-col>
        <b-row>
          <b-col>가격: 단품 ({{ (cost || 0).toLocaleString() }}원)</b-col>
        </b-row>
        <b-row>
          <b-col style="font-weight: bold"
            >{{ (cost || 0).toLocaleString() }}원</b-col
          >
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasketItem",

  props: {
    id: String,
    cost: Number,
  },

  methods: {
    onDeleteClicked() {
      this.$emit("on-delete", this.id);
    },
  },
});
</script>

<style scoped>
div.food-img {
  background-image: url("https://www.beginmate.com/Upload/TextEditor/microsoftgithublove.jpg");
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
}

@media (min-width: 768px) {
  div.food-img {
    width: 150px;
    height: 150px;
  }
}
</style>
