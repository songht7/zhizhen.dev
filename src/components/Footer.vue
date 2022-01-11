<template>
  <div id="Footer-box">
    <div class="footer-block">
      <b-container fluid="xl">
        <b-row class="footer-nav">
          <b-col cols="1">
            <a href="/">
              <img
                :src="`${logo.white}`"
                class="logo-footer col-img align-top"
                alt="rbd group"
              />
            </a>
          </b-col>
          <b-col cols="11">
            <b-nav class="nav-bar-main" small fill>
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
                  {{ Copyright.ICP }}
                </a>
                <a
                  :href="`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${Copyright.Gov}`"
                  target="_blank"
                  ><img src="@img/national.png" />公安备案号：
                  {{ Copyright.Gov }}
                </a>
                <p>
                  {{ Copyright.copyright }}
                  <a :href="`${BaseUrl}`" target="_blank">
                    {{ Copyright.Company }}
                  </a>
                </p>
                <!-- <p>备案机关：上海闵行区网安支队</p> -->
                <p>单位地址：{{ Copyright.Address }}</p>
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
  methods: {},
};
</script>
<style scoped>
</style>
