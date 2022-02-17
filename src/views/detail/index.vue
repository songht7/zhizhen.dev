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
        <div id="Loading" v-if="Loading">
          <b-spinner
            style="width: 3rem; height: 3rem"
            label="Large Spinner"
          ></b-spinner>
        </div>
        <div v-if="List && List.length">
          <div :key="key" v-for="(obj, key) in List">
            <div class="block-row block-row-bold">
              <b-container fluid="xl" class="">
                <b-row class="" align-h="between">
                  <b-col lg="5" class="p-3 animate__animated animate__fadeIn">
                    <img
                      :src="`${obj.pic}`"
                      class="col-img align-top"
                      alt="rbd group"
                    />
                  </b-col>
                  <b-col
                    lg="5"
                    class="ml-auto p-3 animate__animated animate__fadeIn"
                  >
                    <h1 class="title pLeft5">{{ obj.title }}</h1>
                    <!-- <img
                      v-if="obj.picContTitle"
                      :src="`${obj.picContTitle}`"
                      class="col-img align-top img-detail"
                      alt="rbd group"
                    /> -->
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
                      class="col-img align-top col-img-md"
                      alt="rbd group"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
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
import { ContDetail } from "@public/common";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Loading: true,
      Detail: ContDetail.list,
      List: [],
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
    const page = that.$route.query.p;
    that.page = page;
    that.List = that.Detail[page] || [];
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
  beforeUpdate() {
    var that = this;
    console.log("beforeUpdate");
    var page = this.$route.query.p;
    console.log(page);
    if (this.page != page) {
      this.$nextTick(function () {
        that.Loading = false;
        that.page = page;
        that.List = that.Detail[page] || [];
      });
    }
  },
  updated() {
    var that = this;
    console.log("updated");
    var page = this.$route.query.p;
    if (this.page == page) {
      that.Loading = false;
    }
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
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
      if (!md.mobile()) {
        that.List[key]["dShow"] = !that.List[key]["dShow"];
      }
    },
  },
};
</script>

<style lang="scss"></style>
