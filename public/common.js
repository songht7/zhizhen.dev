let cloudUrl =
  "https://jobpassport-1259247972.cos.ap-shanghai.myqcloud.com/data/zhizhen"; //腾讯图片桶地址
let BaseUrl = "http://zhizhen.jobpgroup.com";
const Logo = {
  deep: cloudUrl + "/logo.png",
  white: cloudUrl + "/logo-white.png",
};
/* 菜单 */
const Nav = [
  { cn: "首页", en: "HOME", url: "/" },
  { cn: "市场优势", en: "MARKET ADVANTAGE", url: "/#/detail/index?p=market" },
  { cn: "关于我们", en: "ABOUT US", url: "/#/about/index" },
  { cn: "服务流程", en: "SERVICE PROCESS", url: "/#/service/index" },
  {
    cn: "发展前景",
    en: "DEVELOPMENT PROSPECT",
    url: "/#/develop/index",
  },
  { cn: "品牌文化", en: "BRAND CULTURE", url: "/#/brand/index" },
  { cn: "联系我们", en: "CONTACT US", url: "/#/contact/index" },
];
/* Copyright */
const Copyright = {
  icp: "沪ICP备19019514号-1",
  gov: "31011202011780",
  copyight: "Copyright©2019-2022",
  company: "上海技优网络科技有限公司 - 质贞集团",
  address: "上海市黄浦区桃源路85号永银大厦591室",
};
/* 首页 */
const ContHome = {
  banner: cloudUrl + "/home/1.jpg",
  list: [
    {
      pic: cloudUrl + "/home/L1-0.jpg",
      picCont: cloudUrl + "/home/L1-1.jpg",
      title: "<h1 class='title'>我们的使命</h1>",
      des: "<div class='des'><p>为客户创造真实持久的价值</p><p>为员工创造持续发展的机会</p></div>",
    },
    {
      pic: cloudUrl + "/home/L2-0.jpg",
      picCont: cloudUrl + "/home/L2-1.jpg",
      title: "<h1 class='title'><p>品质保障</p><p>真实持久的价值</p></h1>",
      des:
        "<div class='subDes'><p>我们的承诺与保证</p><p>更专业、更及时、更有效</p></div><div class='subDes threeDes'><p>Our Commitments & Warranties<br/>Professional Promptly Efficient</p></div>",
    },
    {
      pic: cloudUrl + "/home/L3-0.jpg",
      picCont: cloudUrl + "/home/L3-1.jpg",
      title: "<h1 class='title'>提供集成  解决方案</h1>",
      des:
        "<div class='subDes'><p>技术服务、质量服务、制造支持服务</p></div><div class='subDes threeDes'><p>Quality Service<br/>Technical Service<br/>Production Support Service</p></div>",
    },
    {
      pic: cloudUrl + "/home/L4-0.jpg",
      picCont: cloudUrl + "/home/L4-1.jpg",
      title: "<h1 class='title'>高素质  训练团队</h1>",
      des:
        "<div class='subDes'><p>检验员团队搭建、供应商能力提升、质量体系培训、质量工具培训</p></div><div class='subDes threeDes'><p>Inspector Team Build<br/>Supplier Capability Promotion<br/>Quality System Training<br/>Quality tools Training</p></div>",
    },
    {
      pic: cloudUrl + "/home/L5-0.jpg",
      picCont: cloudUrl + "/home/L5-1.jpg",
      title: "<h1 class='title'>质量管理  信息化</h1>",
      des:
        "<div class='subDes'><p>大量制造型企业的真实数据、<br/>大量的质量服务经验、<br/>优质客户的需求、完善的解决方案</p></div><div class='subDes threeDes'><p>Inspector Team Build<br/>Supplier Capability Promotion<br/>Quality System Training<br/>Quality tools Training</p></div>",
    },
  ],
  product: [
    { pic: cloudUrl + "/home/p1.png", title: "产品检验" },
    { pic: cloudUrl + "/home/p2.png", title: "产品返修" },
    { pic: cloudUrl + "/home/p3.png", title: "检测服务" },
    { pic: cloudUrl + "/home/p4.png", title: "技术支持" },
    { pic: cloudUrl + "/home/p5.png", title: "培训服务" },
  ],
};
/* 市场优势详细 */
const ContDetail = {
  list: {
    /*市场优势*/
    market: [
      {
        pic: cloudUrl + "/detail/market/1-1.jpg",
        picContTitle: cloudUrl + "/detail/market/1-2-title.jpg",
        picCont: cloudUrl + "/detail/market/1-2.jpg",
        detail: cloudUrl + "/detail/market/1-3.png",
        dShow: false,
        title: "市场现状",
      },
      {
        pic: cloudUrl + "/detail/market/2-1.jpg",
        picCont: cloudUrl + "/detail/market/2-2.jpg",
        detail: cloudUrl + "/detail/market/2-3.png",
        dShow: false,
        title: "行业痛点",
      },
      {
        pic: cloudUrl + "/detail/market/3-1.jpg",
        picCont: cloudUrl + "/detail/market/3-2.jpg",
        detail: cloudUrl + "/detail/market/3-3.png",
        dShow: false,
        title: "市场规模",
      },
      {
        pic: cloudUrl + "/detail/market/4-1.jpg",
        picCont: cloudUrl + "/detail/market/4-2.jpg",
        detail: cloudUrl + "/detail/market/4-3.png",
        dShow: false,
        title: "竞争分析",
      },
    ],
    /*服务流程*/
    service: [],
  },
};
/* 关于我们 */
const ContAbout = {
  list: {
    map: cloudUrl + "/about/map.jpg",
    mapDetail: cloudUrl + "/about/map-detail.jpg",
    team: cloudUrl + "/about/title1.png",
    teamOv: [
      cloudUrl + "/about/title1-l1.png",
      cloudUrl + "/about/title1-l2.png",
      cloudUrl + "/about/title1-l3.png",
    ],
    teamPic: cloudUrl + "/about/jtz.jpg",
    partner: [
      cloudUrl + "/about/p1.jpg",
      cloudUrl + "/about/p2.jpg",
      cloudUrl + "/about/p3.jpg",
      cloudUrl + "/about/p4.jpg",
    ],
    milepost: cloudUrl + "/about/lcb.jpg",
    vision: [cloudUrl + "/about/b-v.png", cloudUrl + "/about/b-m.png"],
    bettomBg: cloudUrl + "/about/ljz.jpg",
  },
};
/* 服务流程 */
const ContService = {
  banner: cloudUrl + "/service/banner.jpg",
  flowChart: cloudUrl + "/service/flow-chart.png",
  list: [
    {
      pic: cloudUrl + "/service/l1-1.jpg",
      picCont: cloudUrl + "/service/l1-2.jpg",
      title: "确认信息",
    },
    {
      pic: cloudUrl + "/service/l2-1.jpg",
      picCont: cloudUrl + "/service/l2-2.jpg",
      title: "方案定义",
    },
    {
      pic: cloudUrl + "/service/l3-1.jpg",
      picCont: cloudUrl + "/service/l3-2.jpg",
      title: "准备",
    },
    {
      pic: cloudUrl + "/service/l4-1.jpg",
      picCont: cloudUrl + "/service/l4-2.jpg",
      title: "执行任务",
    },
    {
      pic: cloudUrl + "/service/l5-1.jpg",
      picCont: cloudUrl + "/service/l5-2.jpg",
      title: "反馈及结算",
    },
  ],
  bettomBg: cloudUrl + "/service/bottom-bg.jpg",
};
/* 发展前景 */
const ContDevelop = {
  id: "Develop",
  banner: cloudUrl + "/develop/banner.jpg",
  list: [
    {
      title: "项目模式",
      titlePic: cloudUrl + "/develop/l-1-title.png",
      pic: [cloudUrl + "/develop/l-1-1.png", cloudUrl + "/develop/l-1-2.png", cloudUrl + "/develop/l-1-3.png"],
      line: true,
      full: false
    },
    {
      title: "收益分析",
      titlePic: cloudUrl + "/develop/l-2-title.png",
      pic: [cloudUrl + "/develop/l-2-1.png"],
      line: false,
      full: true
    },
    {
      title: "竞争优势",
      titlePic: cloudUrl + "/develop/l-3-title.png",
      pic: [cloudUrl + "/develop/l-3-1.png", cloudUrl + "/develop/l-3-2.png"],
      line: false,
      full: true
    },
  ],
  bg1: cloudUrl + "/develop/bg1.jpg",
  bg2: cloudUrl + "/develop/bg2.jpg",
};
/* 品牌文化 */
const ContBrand = {
  id: "Brand",
  banner: cloudUrl + "/brand/banner.jpg",
  list: [
    {
      title: "我们的使命",
      titlePic: cloudUrl + "/brand/2-title.png",
      pic: [cloudUrl + "/brand/2-1.png"],
      line: false,
      full: false
    },
    {
      title: "图片",
      titlePic: "",
      pic: [cloudUrl + "/brand/1-1.jpg"],
      line: false,
      full: true
    },
    {
      title: "我们的承诺与保证",
      titlePic: cloudUrl + "/brand/3-title.png",
      pic: [cloudUrl + "/brand/3-1.png", cloudUrl + "/brand/3-2.png", cloudUrl + "/brand/3-3.png"],
      line: false,
      full: false
    },
    {
      title: "图片",
      titlePic: "",
      pic: [cloudUrl + "/brand/4-1.jpg"],
      line: false,
      full: true
    },
    {
      title: "图片",
      titlePic: "",
      pic: [cloudUrl + "/brand/5-1.png"],
      line: false,
      full: false
    },
  ]
};
/* 联系我们 */
const ContContact = {
  id: "Contact",
  banner: cloudUrl + "/contact/banner.jpg",
  list: [
    {
      title: "<h1 class='title'>位置信息</h1>",
      pic: cloudUrl + "/contact/map-sh.jpg",
      mapAddress: cloudUrl + "/contact/map-sh-address.png",
      address: "<div class='subDes'><p>地址：上海市黄浦区桃源路85号永银大厦591室</p></div><div class='subDes'><p>电话：<a href='tel:15026551292' class='call'>15026551292</a>  赵勇</p></div><div class='subDes'><p>邮箱：<a href='mailto:zhy@jobpgroup.com' class='call'>zhy@jobpgroup.com</a></p></div>"
    },
    {
      title: "<h1 class='title'>位置信息</h1>",
      pic: cloudUrl + "/contact/map-wx.jpg",
      mapAddress: cloudUrl + "/contact/map-wx-address.png",
      address: "</div><div class='subDes'><p>地址：无锡市新吴区行创四路89号星洲电子商务园1号楼401室</p></div><div class='subDes'><p>电话：<a href='tel:0510-83488116' class='call'>0510-83488116</a></p></div><div class='subDes'><p>传真：0510-83488116</p></div><div class='subDes'><p>邮箱：<a href='mailto:BD@RBDGROUP.COM.CN' class='call'>BD@RBDGROUP.COM.CN</a></p></div>"
    }
  ]
};
// export default {
//     Logo,
//     Nav
// }
module.exports = {
  BaseUrl,
  Logo,
  Nav,
  Copyright,
  ContHome,
  ContDetail,
  ContAbout,
  ContService,
  ContDevelop,
  ContBrand,
  ContContact
};
