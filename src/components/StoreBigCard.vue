<template>
  <div class="store-card">
    <table>
      <tr>
        <td
          rowspan="2"
          style="width: 70%"
          class="img1"
          v-bind:style="{
            backgroundImage: `url(${
              img1 ||
              'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png'
            })`,
          }"
        ></td>
        <td
          style="width: 30%"
          class="img2"
          v-bind:style="{
            backgroundImage: `url(${
              img2 ||
              'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png'
            })`,
          }"
        ></td>
      </tr>
      <tr>
        <td
          class="img3"
          v-bind:style="{
            backgroundImage: `url(${
              img3 ||
              'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png'
            })`,
          }"
        ></td>
      </tr>
    </table>
    <div>
      <b-row class="title-box">
        <b-col>{{ name || "이름 없음" }}</b-col>
      </b-row>
      <b-row>
        <!-- <b-col>
          <span style="margin-right: 5px; color: #999">배달팁</span>
          <span>{{ deliveryMin.toLocaleString() }}원</span>
          <span v-if="deliveryMax">
            ~ {{ deliveryMax.toLocaleString() }}원
          </span>
        </b-col> -->
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "StoreBigCard",
  props: {
    img1: String,
    img2: String,
    img3: String,
    name: String,
  },
});
</script>

<style scoped>
.img1 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 15px;
}
.img2 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 15px;
}
.img3 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
table {
  width: 100%;
  height: 150px;
}
div.store-card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 15px;
}
.title-box {
  padding: 15px;
  text-align: left;
  font-weight: bold;
}
</style>
