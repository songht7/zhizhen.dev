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
      <div id="Contact" class="page-block pb-0">
        <div v-if="List.map">
          <!--map-->
          <div class="p-4">
            <b-container fluid="xl" class="text-light text-center">
              <b-row class="" align-h="between">
                <b-col lg="5" class="p-3 animate__animated animate__fadeInLeft">
                  <img
                    :src="`${List.map}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
                <b-col
                  lg="5"
                  class="ml-auto p-3 animate__animated animate__fadeInRight"
                >
                  <img
                    :src="`${List.mapDetail}`"
                    class="col-img align-top img-detail"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
            </b-container>
          </div>
          <!--领导团队-->
          <div class="block-bg p-4 pb-0">
            <b-container fluid="xl" class="text-light text-center">
              <b-row class="" align-h="center" align-v="center">
                <b-col lg="5" class="p-3 animate__animated animate__fadeInLeft">
                  <img
                    :src="`${List.team}`"
                    class="align-center"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
              <b-row class="" align-h="between">
                <b-col
                  :lg="key == 2 ? auto : key == 1 ? '3' : '4'"
                  class="p-3 animate__animated animate__fadeInLeft"
                  :key="key"
                  v-for="(obj, key) in List.teamOv"
                >
                  <img
                    :src="`${obj}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
              <b-row class="" align-h="between">
                <b-col class="p-0 animate__animated animate__fadeInLeft">
                  <img
                    :src="`${List.teamPic}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
            </b-container>
          </div>
          <!--block-->
          <div class="page-block p-4">
            <b-container fluid="xl" class="text-light text-center">
              <!--合伙人-->
              <b-row class="mb-3 block-row" align-h="around">
                <b-col
                  lg="3"
                  class="p-4 animate__animated animate__fadeInDown"
                  :key="key"
                  v-for="(obj, key) in List.partner"
                >
                  <img
                    :src="`${obj}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
              <!--里程碑-->
              <b-row class="mb-3 block-row" align-h="around">
                <b-col
                  lg="auto"
                  class="p-3 animate__animated animate__fadeInDown"
                >
                  <img
                    :src="`${List.milepost}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
            </b-container>
          </div>
          <!--愿景，使命-->
          <div class="p-4 pb-0 mb-0">
            <b-container fluid="xl" class="text-light text-center">
              <b-row
                class="bettomBg"
                align-h="between"
                :style="`background-image:url(${List.bettomBg})`"
              >
                <b-col
                  :lg="key < 1 ? auto : '6'"
                  class="p-3 animate__animated animate__fadeIn"
                  :key="key"
                  v-for="(obj, key) in List.vision"
                >
                  <img
                    :src="`${obj}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
              <!-- <b-row class="" align-h="between">
                <b-col class="p-0 animate__animated animate__fadeInLeft">
                  <img
                    :src="`${List.bettomBg}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row> -->
            </b-container>
          </div>
          <!--end  -->
        </div>
        <div v-else>
          <div
            style="
              text-align: center;
              font-size: 8rem;
              line-height: 3;
              color: #999;
            "
          >
            Coming Soon
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
import { ContAbout } from "@public/common";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Loading: true,
      List: ContAbout.list,
      page: "",
      AuditorCols1: 4,
      AuditorCols2: 8,
    };
  },
  components: {},
  created() {
    console.log("created");
  },
  mounted(option) {
    var that = this;
    console.log("mounted");
    // this.getAuthority();
    // console.log(that.$route.query);
    if (md.mobile()) {
      that.cols = 12;
      that.AuditorCols1 = 12;
      that.AuditorCols2 = 12;
    } else {
      that.AuditorCols1 = 4;
      that.AuditorCols2 = 8;
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
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

<style lang="scss">
  .bettomBg {
    background-color: #fff;
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 24rem;
  }
</style>
