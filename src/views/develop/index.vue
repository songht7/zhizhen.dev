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
      <div id="Develop" class="page-block">
        <div class="brow img-full">
          <img
            :src="`${Cont.banner}`"
            class="col-img col-img-full align-top"
            alt="rbd group"
          />
        </div>
      </div>
      <!-- class="page-block block-bg" -->
      <div class="page-block pb-0">
        <div v-if="Cont.id">
          <!--begin-->
          <div
            :key="key"
            v-for="(obj, key) in Cont.list"
            class="blockBg"
            :style="`${
              key == 0 ? 'background-image:url(' + Cont.bg1 + ')' : ''
            }`"
          >
            <b-container
              v-if="!obj.full"
              fluid="xl"
              class="text-light text-center pb-5 mb-5"
            >
              <b-row class="" align-h="around">
                <b-col
                  lg="auto"
                  class="pb-5 mb-5 animate__animated animate__lightSpeedInLeft"
                >
                  <img
                    :src="`${obj.titlePic}`"
                    class="col-img align-top"
                    :alt="`${obj.title}`"
                  />
                </b-col>
              </b-row>
              <b-row
                :class="[
                  'mb-3',
                  key2 < obj['pic'].length - 1 ? 'block-row' : '',
                ]"
                align-h="around"
                :key="key2"
                v-for="(obj2, key2) in obj.pic"
              >
                <b-col
                  lg="auto"
                  class="p-3 animate__animated animate__lightSpeedInLeft"
                >
                  <img
                    :src="`${obj2}`"
                    class="col-img align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
            </b-container>

            <div
              v-else
              class="page-block pb-0 pb-5 mb-5 blockBg"
              :style="`${
                key == 2 ? 'background-image:url(' + Cont.bg2 + ')' : ''
              }`"
            >
              <b-container fluid="xl" class="text-light text-center">
                <b-row class="" align-h="around">
                  <b-col
                    lg="auto"
                    class="
                      pb-5
                      mb-5
                      animate__animated animate__lightSpeedInLeft
                    "
                  >
                    <img
                      :src="`${obj.titlePic}`"
                      class="col-img align-top"
                      :alt="`${obj.title}`"
                    />
                  </b-col>
                </b-row>
              </b-container>
              <div class="img-full" :key="key2" v-for="(obj2, key2) in obj.pic">
                <img
                  :src="`${obj2}`"
                  class="
                    col-img
                    align-top
                    animate__animated animate__lightSpeedInLeft
                  "
                  alt="rbd group"
                />
              </div>
            </div>
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
import { ContDevelop } from "@public/common";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Loading: true,
      Cont: ContDevelop,
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
.blockBg {
  background-color: #fff;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
