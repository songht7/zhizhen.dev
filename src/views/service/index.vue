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
      <div id="Server" class="page-block">
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
        <!--流程图表-->
        <b-container fluid="xl" class="text-light text-center">
          <b-row class="mb-3 block-row" align-h="around">
            <b-col lg="auto" class="p-3 animate__animated animate__fadeIn">
              <img
                :src="`${Cont.flowChart}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
        </b-container>
        <!--流程图表-详细-->
        <b-container fluid="xl" class="text-light text-center">
          <b-row
            class="mb-3 block-row"
            align-h="between"
            align-v="center"
            :key="key"
            v-for="(obj, key) in Cont.list"
          >
            <b-col lg="4" class="p-3 animate__animated animate__fadeIn">
              <img
                :src="`${obj.pic}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col lg="6" class="p-3 animate__animated animate__fadeIn">
              <img
                :src="`${obj.picCont}`"
                class="col-img align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="page-block pb-0">
        <div class="img-full">
          <b-link href="/#/contact/index">
            <img
              :src="`${Cont.bettomBg}`"
              class="subscribe col-img col-img-full align-top animate__animated animate__fadeIn"
              alt="rbd group"
            />
          </b-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { ContService } from "@public/common";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      Cont: ContService,
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
  methods: {
    subscribe() {},
  },
};
</script>

<style lang="scss"></style>
