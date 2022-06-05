<template>
  <div>
    <in-app-top-bar :address="'방이동'"></in-app-top-bar>
    <menu-nav-bar></menu-nav-bar>
    <ads-box></ads-box>
    <section-card>
      <b-row>
        <b-col>
          <image-text-button
            v-for="menu in menuList"
            :key="menu"
            :title="menu.title"
            :imgUrl="menu.imgUrl"
          ></image-text-button>
        </b-col>
      </b-row>
    </section-card>
    <section-card style="margin-top: 15px">
      <horizontal-grid :title="'배민1에 새로 들어왔어요'"></horizontal-grid>
    </section-card>
    <section-card>
      <store-big-card-grid></store-big-card-grid>
    </section-card>
  </div>
</template>

<script lang="ts">
import InAppTopBar from "@/components/InAppTopBar.vue";
import MenuNavBar from "@/components/MenuNavBar.vue";
import AdsBox from "@/components/AdsBox.vue";
import ImageTextButton from "@/components/ImageTextButton.vue";
import SectionCard from "@/components/SectionCard.vue";
import HorizontalGrid from "@/components/HorizontalGrid.vue";
import StoreBigCardGrid from "@/components/StoreBigCardGrid.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    InAppTopBar,
    MenuNavBar,
    AdsBox,
    ImageTextButton,
    SectionCard,
    HorizontalGrid,
    StoreBigCardGrid,
  },
  name: "AddressBasedView",

  data() {
    return {
      menuList: [
        {
          title: "1인분",
          imgUrl: `${require("@/assets/finger.png")}`,
        },
        {
          title: "돈까스 회 일식",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/2252/premium/2252075.png?token=exp=1653182070~hmac=e1d1816406f2d0839f7fce8e0c48d838",
        },
        {
          title: "중식",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/3918/premium/3918681.png?token=exp=1653182098~hmac=a5532c6376d36fb6f3107b2b8af48464",
        },
        {
          title: "치킨",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png",
        },
        {
          title: "백반 죽 국수",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/1531/premium/1531385.png?token=exp=1653182631~hmac=491e0a6e288fdb8311e07c430cb07038",
        },
        {
          title: "맛집랭킹",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/2872/premium/2872222.png?token=exp=1653182646~hmac=edecd8c300db60daa72117e85c3456cf",
        },
        {
          title: "카페 디저트",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3789/3789902.png",
        },
        {
          title: "분식",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/2010/premium/2010581.png?token=exp=1653182703~hmac=ee26593b455e9cdaf3075be0351c558a",
        },
        {
          title: "찜 탕 찌개",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/2388/premium/2388080.png?token=exp=1653182730~hmac=f8dd4eae36ecc7bb6542dacc9bf0237d",
        },
        {
          title: "피자",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3595/3595458.png",
        },
        {
          title: "양식",
          imgUrl:
            "https://cdn-icons.flaticon.com/png/512/4465/premium/4465494.png?token=exp=1653182765~hmac=c431a840fca496bf955e90f54f60d684",
        },
        {
          title: "고기 구이",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/1391/1391399.png",
        },
        {
          title: "족발 보쌈",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3480/3480720.png",
        },
        {
          title: "아시안",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3946/3946515.png",
        },
        {
          title: "버거",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
