<template>
  <div>
    <b-row>
      <b-col style="text-align: left">
        <h4>{{ title }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        style="
          text-align: left;
          white-space: nowrap;
          padding: 15px 0;
          overflow-y: scroll;
        "
      >
        <grid-item
          v-for="store in storeList"
          :key="store"
          :imgUrl="store.imgUrl"
          :storeName="store.storeName"
          :score="store.score"
          :deliveryMin="store.deliveryMin"
          :deliveryMax="store.deliveryMax"
        ></grid-item>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridItem from "./GridItem.vue";

export default defineComponent({
  name: "HorizontalGrid",
  props: {
    title: String,
  },
  components: {
    GridItem,
  },

  data() {
    return {
      storeList: [
        {
          imgUrl:
            "https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png",
          storeName: "제비 파스타&리조또 강동점",
          score: 5.0,
          deliveryMin: 0,
          deliveryMax: 0,
        },
        {
          imgUrl:
            "https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png",
          storeName: "제비 파스타&리조또 강동점",
          score: 5.0,
          deliveryMin: 0,
          deliveryMax: 1900,
        },
        {
          imgUrl:
            "https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png",
          storeName: "제비 파스타&리조또 강동점",
          score: 5.0,
          deliveryMin: 0,
          deliveryMax: 1900,
        },
        {
          imgUrl:
            "https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png",
          storeName: "제비 파스타&리조또 강동점",
          score: 5.0,
          deliveryMin: 0,
          deliveryMax: 1900,
        },
        {
          imgUrl:
            "https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png",
          storeName: "제비 파스타&리조또 강동점",
          score: 5.0,
          deliveryMin: 0,
          deliveryMax: 1900,
        },
      ],
    };
  },
});
</script>

<style scoped></style>
