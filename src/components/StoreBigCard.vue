<template>
  <div class="store-card">
    <table>
      <tr>
        <td rowspan="2" style="width: 70%" class="img1"></td>
        <td style="width: 30%" class="img2"></td>
      </tr>
      <tr>
        <td class="img3"></td>
      </tr>
    </table>
    <div>
      <b-row class="title-box">
        <b-col>미분당 길동점</b-col>
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
});
</script>

<style scoped>
.img1 {
  background-image: url("http://cdn.cnn.com/cnnnext/dam/assets/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-top-left-radius: 15px;
}
.img2 {
  background-image: url("https://www.kworldnow.com/wp-content/uploads/2020/08/korean-food-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 15px;
}
.img3 {
  background-image: url("https://i.pinimg.com/originals/c8/94/31/c89431717459c8a63fbfcc92e47085a8.jpg");
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
}

.title-box {
  padding: 15px;
  text-align: left;
  font-weight: bold;
}
</style>
