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
        <b-container fluid="xl" class="text-center">
          <b-row
            class="mb-3 block-row"
            align-h="between"
            :key="key"
            v-for="(obj, key) in Cont.list"
          >
            <b-col lg="5" class="p-3 animate__animated animate__fadeIn">
              <img
                :src="`${obj.pic}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col lg="5" class="ml-auto p-3 text-right animate__animated animate__fadeIn">
              <!-- <img
                :src="`${obj.picCont}`"
                class="col-img align-top"
                alt="rbd group"
              /> -->
              <div v-html="obj.title"></div>
              <div v-html="obj.des"></div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="page-block">
        <b-container fluid="xl" class="text-light text-center">
          <b-row class="text-center">
            <b-col
              :cols="ProCols"
              class="ml-auto mb-3"
              :key="key"
              v-for="(obj, key) in Cont.product"
            >
              <a class="pro-block" href="#" >
                <!-- <b-img
                  :src="`${obj.pic}`"
                  fluid
                  rounded="top"
                  alt="rbd group"
                ></b-img> -->
                <img
                :src="`${obj.pic}`"
                class="col-img align-top"
                alt="rbd group"
              />
                <!-- <div class="p-title">{{ obj.title }}</div> -->
              </a>
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
      ProCols: 0,
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
      that.ProCols = 12;
    } else {
      that.AuditorCols1 = 4;
      that.AuditorCols2 = 8;
      that.ProCols = 0;
    }
  },
  methods: {},
};
</script>

<style lang="scss"></style>
