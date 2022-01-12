<template>
  <div id="Page-main">
    <Head></Head>
    <div
      id="Page-container"
      :class="[
        'animate__animated',
        `animate__${$store.state.animated.animateStyle}`,
        `duration-${$store.state.animated.duration}`,
      ]"
    >
      <div id="Home" class="page-block">
        <div class="brow img-full">
          <img
            :src="`${Cont.banner}`"
            class="col-img col-img-full align-top"
            alt="rbd group"
          />
        </div>
      </div>
      <!-- block-bg -->
      <div class="page-block">
        <b-container fluid="xl" class="text-light text-center">
          <b-row
            class="mb-3 block-row"
            align-h="between"
            :key="key"
            v-for="(obj, key) in Cont.list"
          >
            <b-col lg="5" class="p-3">
              <img
                :src="`${obj.pic}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col lg="5" class="ml-auto p-3">
              <img
                :src="`${obj.picCont}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="page-block">
        <b-container fluid="xl" class="text-light text-center">
          <b-row class="mb-3 text-center" align-h="between">
            <b-col  class="ml-auto p-1" :key="key" v-for="(obj, key) in Cont.product">
              <div class="pro-block">
                <b-img
                  :src="`${obj.pic}`"
                  fluid
                  rounded="top"
                  alt="rbd group"
                ></b-img>
                <!-- <img
                :src="`${obj.pic}`"
                class="col-img align-top"
                alt="rbd group"
              /> -->
                <div class="p-title">{{ obj.title }}</div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { ContHome } from "@public/common";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Cont: ContHome,
      AuditorCols1: 4,
      AuditorCols2: 8,
    };
  },
  components: {},
  mounted() {
    // this.getAuthority();
    var that = this;
    //console.log(md.mobile());
    if (md.mobile()) {
      that.cols = 12;
      that.AuditorCols1 = 12;
      that.AuditorCols2 = 12;
    } else {
      that.AuditorCols1 = 4;
      that.AuditorCols2 = 8;
    }
  },
  methods: {},
};
</script>

<style lang="scss"></style>
