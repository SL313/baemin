<template>
  <div>
    <ads-box>
      <in-app-top-bar :color="'white'"></in-app-top-bar>
    </ads-box>
    <b-row>
      <b-col>배영호의 묵은지 김치찜 강동점</b-col>
    </b-row>
    <b-row>
      <b-col><BIconStarFill /> 5.0</b-col>
    </b-row>
    <b-row>
      <b-col>최소주문 금액</b-col>
      <b-col>14,000원</b-col>
    </b-row>
    <b-row>
      <b-col>배달 팁</b-col>
      <b-col>14,000원</b-col>
    </b-row>
    <b-row>
      <b-col>운영 상태</b-col>
      <b-col>14,000원</b-col>
    </b-row>

    <hr />
    <section-card>
      <b-row>
        <b-col>
          <h3>인기 메뉴</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" lg="6" xl="4" style="margin-bottom: 15px">
          <food-list-item></food-list-item>
        </b-col>
        <b-col cols="12" md="6" lg="6" xl="4" style="margin-bottom: 15px">
          <food-list-item></food-list-item>
        </b-col>
        <b-col cols="12" md="6" lg="6" xl="4" style="margin-bottom: 15px">
          <food-list-item></food-list-item>
        </b-col>
        <b-col cols="12" md="6" lg="6" xl="4" style="margin-bottom: 15px">
          <food-list-item></food-list-item>
        </b-col>
      </b-row>
    </section-card>

    <section-card>
      <b-row>
        <b-col>
          <h3>메인 메뉴</h3>
        </b-col>
      </b-row>
    </section-card>

    <floating-btn @click="test()"></floating-btn>
  </div>
</template>

<script lang="ts">
import { OrderMenuModel } from "@/interface/order.model";
import { addMenu, requestPayment } from "@/store";
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";
import AdsBox from "@/components/AdsBox.vue";
import InAppTopBar from "@/components/InAppTopBar.vue";
import SectionCard from "@/components/SectionCard.vue";
import FoodListItem from "@/components/FoodListItem.vue";
import FloatingBtn from "@/components/FloatingBtn.vue";

export default defineComponent({
  components: {
    InAppTopBar,
    AdsBox,
    SectionCard,
    FoodListItem,
    FloatingBtn,
  },
  data() {
    return {
      dispatch: useDispath(),
      orders: useSelector((state) => state.orders),
    };
  },
  mounted() {
    console.log("mounted");
  },

  methods: {
    onMenuClicked(menuName: string) {
      this.dispatch(
        addMenu({
          name: menuName,
        } as OrderMenuModel)
      );
    },

    test() {
      this.dispatch(
        requestPayment({
          cost: 14900,
        })
      );
    },
  },
});
</script>
