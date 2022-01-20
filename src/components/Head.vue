<template>
  <b-navbar
    class="nav-bar"
    type="light"
    toggleable="lg"
    variant="faded"
    fixed="top"
  >
    <b-container fluid="xl" class="nav-main">
      <b-navbar-brand href="/">
        <img
          id="Logo"
          class="d-inline-block align-top"
          :src="`${logo.deep}`"
          alt="rbd group"
        />
      </b-navbar-brand>
      <b-navbar-toggle class="nav-tog" target="nav-collapse"> </b-navbar-toggle>
      <b-collapse class="nav-coll" is-nav id="nav-collapse">
        <b-navbar-nav class="nav-bar-main">
          <b-nav-item
            class="nav-btn"
            :href="`${obj.url}`"
            @click="animated"
            :key="key"
            v-for="(obj, key) in navs"
            >{{ obj.cn }}</b-nav-item
          >
          <!-- <b-link
            class="nav-btn"
            :href="`${obj.url}`"
            @click="animated"
            :key="key"
            v-for="(obj, key) in navs"
            >{{ obj.cn }}
          </b-link> -->
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { Logo, Nav } from "../../public/common";
export default {
  name: "Head",
  props: [],
  data() {
    return {
      logo: Logo,
      navs: Nav,
      stickyval: true,
    };
  },

  components: {},

  computed: {},
  created() {
    // console.log(1);
  },
  mounted() {
    // this.getAuthority();
    let that = this;
    this.$nextTick(function () {});
  },

  methods: {
    animated() {
      this.$store.state.animated.animateStyle = "fadeIn";
      this.$store.state.animated.duration = "3s";
      setTimeout(() => {
        this.$store.state.animated.animateStyle = "";
        this.$store.state.animated.duration = "";
      }, 500);
    },
  },
};
</script>
<style scoped></style>
