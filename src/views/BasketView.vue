<template>
  <div>
    <in-app-top-bar :address="'장바구니'"></in-app-top-bar>
    <!-- <div>장바구니 {{ orderList.length }}</div>
    <ul>
      <li v-for="order in orderList" v-bind:key="order.name">
        {{ order.name }}
      </li>
    </ul> -->
    <section-card style="text-align: left">
      <b-row>
        <b-col>
          <h4>하루엔소쿠 길동점</h4>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col cols="12" lg="6" v-for="order in orderListTest" :key="order">
          <basket-item
            :id="order.id"
            :cost="order.cost"
            v-on:on-delete="onItemDelete"
          ></basket-item>
        </b-col>
      </b-row>
      <hr />
      <b-row style="text-align: center; font-weight: bold">
        <b-col> <BIconPlusLg /> 더 담으러 가기 </b-col>
      </b-row>
    </section-card>

    <section-card>
      <b-row>
        <b-col cols="12" md="6">
          <pay-col :text="'총 주문금액'" :cost="sumCost"></pay-col>
        </b-col>
        <b-col cols="12" md="6">
          <pay-col :text="'배달팁'" :cost="deliveryTip"></pay-col>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col>
          <pay-col
            :text="'결제예정금액'"
            :cost="paymentCost"
            :isBold="true"
          ></pay-col>
        </b-col>
      </b-row>
    </section-card>

    <b-row>
      <b-col style="height: 50px"></b-col>
    </b-row>

    <b-row align-h="end">
      <b-col style="text-align: right" cols="12" md="6" lg="3">
        <b-button class="payment-btn" @click="startPayment()"
          >{{ (paymentCost || 0).toLocaleString() }}원 배달 주문하기</b-button
        >
      </b-col>
    </b-row>

    <b-row>
      <b-col style="height: 50px"></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { requestPayment } from "@/store";
import { useDispath, useSelector } from "../helpers";
import InAppTopBar from "@/components/InAppTopBar.vue";
import SectionCard from "@/components/SectionCard.vue";
import BasketItem from "@/components/BasketItem.vue";
import PayCol from "@/components/PayCol.vue";

export default defineComponent({
  components: {
    InAppTopBar,
    SectionCard,
    BasketItem,
    PayCol,
  },
  data() {
    return {
      dispatch: useDispath(),
      orderList: useSelector((state) => state.orders).value.orderList,
      orderListTest: [
        {
          id: "test1",
          cost: 12000,
        },
        {
          id: "test2",
          cost: 12000,
        },
        {
          id: "test3",
          cost: 12000,
        },
        {
          id: "test4",
          cost: 12000,
        },
      ],
      deliveryTip: 2900,
    };
  },

  mounted() {
    console.log(
      "test",
      useSelector((state) => state.orders)
    );
  },

  methods: {
    startPayment() {
      this.dispatch(
        requestPayment({
          cost: this.paymentCost,
        })
      );
    },

    onItemDelete(id: string) {
      console.log("del", id);
      const orderItem = this.orderListTest.find((item) => item.id == id);
      if (orderItem) {
        this.orderListTest.splice(this.orderListTest.indexOf(orderItem), 1);
      }
    },
  },

  computed: {
    sumCost(): number {
      return this.orderListTest.reduce((a, b) => a + b.cost, 0);
    },
    paymentCost(): number {
      return this.sumCost + this.deliveryTip;
    },
  },
});
</script>

<style scoped>
.payment-btn {
  width: 100%;
  background-color: #2ac1bc;
  border-color: #2ac1bc;
  font-weight: bold;
}
</style>
