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
      <div id="Contact" class="page-block">
        <div class="brow img-full animate__animated animate__fadeIn">
          <img
            :src="`${Cont.banner}`"
            class="col-img col-img-full align-top"
            alt="rbd group"
          />
        </div>
      </div>
      <div class="page-block">
        <b-container fluid="xl" class="text-left">
          <b-row
            class="mb-3"
            align-v="end"
            :key="key"
            v-for="(obj, key) in Cont.list"
          >
            <b-col lg="6" class="p-3 animate__animated animate__fadeIn">
              <img
                :src="`${obj.pic}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col lg="6" class="ml-auto p-3 animate__animated animate__fadeIn">
              <!-- <img
                :src="`${obj.picCont}`"
                class="col-img align-top"
                alt="rbd group"
              /> -->
              <div v-html="obj.title"></div>
              <div v-html="obj.address"></div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- <div class="page-block block-bg">
        <b-container fluid="xl">
          <ContactUs></ContactUs>
        </b-container>
      </div> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { ContContact } from "@public/common";

import ContactUs from "@/components/ContactUs";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Loading: true,
      Cont: ContContact,
      AuditorCols1: 4,
      AuditorCols2: 8,
    };
  },
  components: {
    ContactUs,
  },
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
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss"></style>
