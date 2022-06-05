<template>
  <div>
    <BIconHandbag />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FloatingBtn",
});
</script>

<style scoped>
div {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 72px;
  height: 72px;
  background-color: #2ac1bc;
  color: white;
  line-height: 66px;
  border-radius: 36px;
  font-size: 30px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  cursor: pointer;
}
</style>
