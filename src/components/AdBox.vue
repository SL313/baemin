<template>
  <b-row>
    <b-col class="ads-img">
      <div class="ads-text">11 / 13</div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AdBox",
});
</script>

<style scoped>
.ads-img {
  background-image: url("https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTdfMTQz/MDAxNTc5MjM3MDIxMjcz.zZrpiAcl73Y9RtmwuwHjuvtuD4B9uUnpguldv9S3y4cg.UiUHUkbBJLnAjTPTOQ2eE95pXX_1IAblwpmbElEKINog.PNG.smartbaedal/%EB%B0%B0%EB%AF%BC%EC%98%A4%EB%8D%94_%EB%84%A4%EC%9D%B4%EB%B2%84%EC%BA%90%EC%8A%A4%ED%8A%B8m.png?type=w800");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
  position: relative;
}
.ads-text {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.8em;
}
@media (min-width: 768px) {
  .ads-img {
    height: 300px;
  }
  .ads-text {
    font-size: 1em;
  }
}
</style>
