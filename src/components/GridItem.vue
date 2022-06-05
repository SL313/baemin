<template>
  <div class="grid-item" style="text-align: center; margin-right: 15px">
    <img :src="imgUrl" />
    <div style="height: 32px; line-height: 32px">
      <span class="store-name">{{ storeName }}</span>
      <span class="star-score">
        <BIconStarFill /><span style="margin-left: 5px">{{ score }}</span></span
      >
    </div>
    <div>
      <span style="margin-right: 5px; color: #999">배달팁</span
      ><span>{{ deliveryMin.toLocaleString() }}원</span>
      <span v-if="deliveryMax"> ~ {{ deliveryMax.toLocaleString() }}원</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GridItem",
  props: {
    imgUrl: String,
    storeName: String,
    score: Number,
    deliveryMin: Number,
    deliveryMax: Number,
  },
});
</script>

<style scoped>
div.grid-item {
  width: 200px;
  display: inline-block;
}

img {
  border-radius: 15px;
  width: 176px;
}

span.store-name {
  width: 130px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 130px;
  display: inline-block;
}

span.star-score {
  display: inline-block;
  transform: translateY(-12px);
}

@media (min-width: 768px) {
  img {
    width: 192px;
  }
}
</style>
