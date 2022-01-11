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
      <div id="Contact" class="page-block block-bg">
        <b-container fluid="xl">
          <ContactUs></ContactUs>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
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
