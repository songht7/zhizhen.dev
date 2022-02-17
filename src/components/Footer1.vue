<template>
  <div id="Footer-box">
    <div class="footer-block">
      <b-container fluid="xl">
        <b-row class="footer-nav justify-content-md-center" align-h="between" align-content='center' align-v="end">
          <b-col md="1">
            <a href="/">
              <!-- <b-img :src="`${logo.white}`" fluid alt="rbd group"></b-img> -->
              <img
                :src="`${logo.white}`"
                class="logo-footer col-img align-top"
                alt="rbd group"
              />
            </a>
          </b-col>
          <b-col cols="12" md="auto">
            <b-nav class="nav-bar-main" small>
              <b-nav-item
                class="nav-btn"
                :href="`${obj.url}`"
                @click="animated"
                :key="key"
                v-for="(obj, key) in navs"
                >{{ obj.en }}
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-block footer-block-cr">
      <b-container fluid="xl">
        <b-row>
          <b-jumbotron>
            <!-- <template v-slot:header>BootstrapVue</template> -->
            <template v-slot:lead>
              <div class="copyright">
                <a href="https://beian.miit.gov.cn/" target="_blank">
                  {{ Copyright.icp }}
                </a>
                <a
                  :href="`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${Copyright.gov}`"
                  target="_blank"
                  ><img src="@img/national.png" />公安备案号：
                  {{ Copyright.gov }}
                </a>
                <p>
                  {{ Copyright.copyright }}
                  <a :href="`${BaseUrl}`" target="_blank">
                    {{ Copyright.company }}
                  </a>
                </p>
                <!-- <p>备案机关：上海闵行区网安支队</p> -->
                <p>单位地址：{{ Copyright.address }}</p>
              </div>
            </template>
            <p></p> </b-jumbotron
        ></b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { BaseUrl, Logo, Nav, Copyright } from "../../public/common";
export default {
  name: "Footer",
  props: [],
  data() {
    return {
      BaseUrl,
      logo: Logo,
      navs: Nav,
      Copyright,
    };
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
  },
  methods: {
    animated() {
      this.$store.state.animated.animateStyle = "fadeIn";
      this.$store.state.animated.duration = "3s";
      setTimeout(() => {
        this.$store.state.animated.animateStyle = "";
        this.$store.state.animated.duration = "";
      }, 3000);
    },
  },
};
</script>
<style scoped>
</style>
