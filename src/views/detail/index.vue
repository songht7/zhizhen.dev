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
      <!-- class="page-block block-bg" -->
      <div id="Contact" class="page-block">
        <div :key="key" v-for="(obj, key) in Cont">
          <div class="block-row block-row-bold">
            <b-container fluid="xl" class="text-light text-center">
              <b-row class="" align-h="between">
                <b-col lg="5" class="p-3 animate__animated animate__fadeInLeft">
                  <img
                    :src="`${obj.pic}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
                <b-col
                  lg="5"
                  class="ml-auto p-3 animate__animated animate__fadeInRight"
                >
                  <img
                    :src="`${obj.picCont}`"
                    class="col-img align-top img-detail"
                    alt="rbd group"
                    @click="blockDetail(key)"
                  />
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div v-show="obj.dShow" class="block-detail">
            <b-icon
              class="detail-arrow"
              icon="triangle-fill"
              font-scale="1.2"
              flip-v
              style="color: #7d7d7d"
            ></b-icon>
            <b-container
              fluid="xl"
              class="
                text-light text-center
                animate__animated animate__fadeInDown
              "
            >
              <b-row class="" align-h="between">
                <b-col lg="12" class="p-3">
                  <img
                    :src="`${obj.detail}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <!-- <b-container fluid="xl">
          <b-icon icon="triangle-fill" rotate="90" font-scale=".6" style="color: #7d7d7d;"></b-icon>
          <b-icon icon="triangle-fill" flip-v style="color: #7d7d7d;"></b-icon>
        </b-container> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import ContactUs from "@/components/ContactUs";
import { ContHome } from "@public/common";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Cont: ContHome.detail,
      AuditorCols1: 4,
      AuditorCols2: 8,
    };
  },
  components: {},
  mounted() {
    var that = this;
    const page = that.$route.query.p;
    that.Cont = that.Cont[page];
    // this.getAuthority();
    // console.log(that.Cont);
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
    blockDetail(key) {
      var that = this;
      // console.log(key);
      that.Cont[key]["dShow"] = !that.Cont[key]["dShow"];
    },
  },
};
</script>

<style lang="scss"></style>
