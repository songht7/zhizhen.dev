<template>
  <div class="form-box">
    <b-container class="bv-example-row">
      <b-row>
        <b-col :cols="ContactCols">
          <b-row>
            <b-jumbotron>
              <template v-slot:header>
                联系我们
              </template>
            </b-jumbotron>
          </b-row>
          <b-row>
            <div class="temp-row">
              <b-row class="line-lg">
                <b-col :cols="addressRow.r1">
                  <div class="icon-block icon-location">
                    江苏地址:
                  </div>
                </b-col>
                <b-col :cols="addressRow.r2">
                  <p>江苏省无锡市新吴区<br>行创四路89号星洲商务园1栋401室</p>
                </b-col>
              </b-row>
              <b-row class="line-lg">
                <b-col :cols="addressRow.r1">
                  <div class="icon-block icon-location">
                    上海地址:
                  </div>
                </b-col>
                <b-col :cols="addressRow.r2">
                  <p>上海市西藏南路218号永银大厦5楼591室</p>
                </b-col>
              </b-row>
              <p class="line-lg"></p>
              <b-row class="line-lg">
                <b-col :cols="addressRow.r1">
                  <div class="icon-block icon-phone">
                    电话:
                  </div>
                </b-col>
                <b-col :cols="addressRow.r2">
                  <a href="tel:+86-18602974630">+86-18602974630</a>
                </b-col>
              </b-row>
              <b-row class="line-lg">
                <b-col :cols="addressRow.r1">
                  <div class="icon-block icon-email">
                    邮箱:
                  </div>
                </b-col>
                <b-col :cols="addressRow.r2">
                  <a href="mailto:xin.lv@rbdgroup.com.cn">
                    xin.lv@rbdgroup.com.cn
                  </a>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </b-col>
        <!-- <b-col cols="2"> </b-col> -->
        <b-col :cols="ContactCols">
          <b-col>
            <b-jumbotron>
              <template v-slot:header>
                给我们留言
              </template>
              <template v-slot:lead>
                <div class="temp-row">
                  <b-row class="my-3">
                    <b-col>
                      <b-form-input
                        class="rbd-input"
                        id="type-text"
                        type="text"
                        placeholder="您的姓名"
                        v-model="name"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-3">
                    <b-col>
                      <b-form-input
                        class="rbd-input"
                        id="type-number"
                        type="number"
                        placeholder="您的手机号"
                        v-model="phone"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-3">
                    <b-col>
                      <b-form-input
                        class="rbd-input"
                        id="type-email"
                        type="email"
                        placeholder="您的邮箱"
                        v-model="email"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-3">
                    <b-col>
                      <b-form-textarea
                        class="rbd-textarea"
                        id="mark"
                        v-model="mark"
                        placeholder="说些什么..."
                        size="lg"
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                  <b-row class="my-4">
                    <b-col>
                      <div class="btn-box">
                        <b-alert
                          class="alert-block"
                          :show="alertShow"
                          :variant="variant"
                          fade
                        >
                          {{ variantVal }}
                        </b-alert>
                        <b-button
                          class="rbd-btn"
                          :block="block"
                          variant="primary"
                          style="width:100%"
                          @click="OnSubmit"
                          >确认发送</b-button
                        >
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </template>
            </b-jumbotron>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
var graceChecker = require("/public/graceChecker.js");
var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  name: "ContactUs",
  props: [],
  data() {
    return {
      ContactCols: 6,
      addressRow: {
        r1: 3,
        r2: 9,
      },
      block: true,
      name: "",
      phone: "",
      email: "",
      mark: "",
      alertShow: false,
      variant: "danger", //success danger warning
      variantVal: "",
      loading: false,
      formData: {
        name: "",
        phone: "",
        email: "",
        mark: "",
      },
    };
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
    var that = this;
    //console.log(md.mobile());
    if (md.mobile()) {
      that.ContactCols = 12;
      that.addressRow = {
        r1: 12,
        r2: 12,
      };
    } else {
      that.ContactCols = 6;
      that.addressRow = {
        r1: 3,
        r2: 9,
      };
    }
  },
  methods: {
    OnSubmit() {
      var that = this;
      if (that.loading == true) {
        return;
      }
      var _formData = {
        name: that.name,
        phone: that.phone,
        email: that.email,
        mark: that.mark,
      };
      var rule = [
        {
          name: "name",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写姓名",
        },
        {
          name: "phone",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "请确认手机号是否正确",
        },
        {
          name: "email",
          checkType: "email",
          checkRule: "",
          errorMsg: "请填写正确的邮箱地址",
        },
      ];
      //进行表单检查
      var checkRes = graceChecker.check(_formData, rule);
      that.loading = true;
      if (checkRes) {
        //api: contact api.js
        var data = {
          邮件来源: ".::质贞 zhizhen.jobpgroup.com ::.",
          姓名: _formData.name,
          联系方式: _formData.phone,
          邮箱: _formData.email,
          留言: _formData.mark,
        };
        this.$api.contact
          .postSetMail(data)
          .then((res) => {
            console.log("postSetMail:", res);
            that.alertShow = true;
            that.variant = res.success == true ? "success" : "danger"; //success danger warning
            that.variantVal = res.data;
            setTimeout(() => {
              that.alertShow = false;
              that.loading = false;
            }, 3000);
            if (res.success) {
            } else {
            }
          })
          .catch((res) => {
            that.loading = false;
            console.log(res);
          });
      } else {
        console.log(graceChecker.error);
        that.loading = false;
        that.alertShow = true;
        that.variant = "warning"; //success danger warning
        that.variantVal = graceChecker.error;
        setTimeout(() => {
          that.alertShow = false;
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>
#Footer-box {
  background: #efefef;
  padding: 50px 0;
}
</style>
