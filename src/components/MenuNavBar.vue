<template>
  <div style="margin: 5px 0">
    <b-row>
      <b-col
        style="
          text-align: left;
          white-space: nowrap;
          overflow-y: scroll;
          padding: 15px 0;
        "
      >
        <nav-bar-btn
          v-for="nav in navList"
          :key="nav"
          :title="nav"
          :isActive="activeNav == nav"
        ></nav-bar-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarBtn from "./NavBarBtn.vue";

export default defineComponent({
  name: "MenuNavBar",

  components: {
    NavBarBtn,
  },

  data() {
    return {
      activeNav: "배민1",
      navList: [
        "배민1",
        "배달",
        "포장",
        "B마트",
        "배민스토어",
        "쇼핑라이브",
        "선물하기",
        "전국별미",
      ],
    };
  },
});
</script>

<style scoped></style>
