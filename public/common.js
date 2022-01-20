let cloudUrl = 'https://jobpassport-1259247972.cos.ap-shanghai.myqcloud.com/data/zhizhen';//腾讯图片桶地址
let BaseUrl = "http://zhizhen.jobpgroup.com"
const Logo = { 'deep': cloudUrl + "/logo.png", 'white': cloudUrl + "/logo-white.png" }
const Nav = [
    { 'cn': "首页", 'en': "HOME", 'url': "/home" },
    { 'cn': "市场优势", 'en': "MARKET ADVANTAGE", 'url': "/detail?p=market" },
    { 'cn': "关于我们", 'en': "ABOUT US", 'url': "/detail?p=about" },
    { 'cn': "服务流程", 'en': "SERVICE PROCESS", 'url': "/detail?p=service" },
    { 'cn': "发展前景", 'en': "DEVELOPMENT PROSPECT", 'url': "/detail?p=develop" },
    { 'cn': "品牌文化", 'en': "BRAND CULTURE", 'url': "/detail?p=brand" },
    { 'cn': "联系我们", 'en': "CONTACT US", 'url': "/contact" }
]
const Copyright = {
    "icp": "沪ICP备19019514号-1",
    "gov": "31011202011780",
    'copyight': "Copyright©2019-2022",
    "company": "上海技优网络科技有限公司 - 质贞平台",
    "address": "上海黄浦区西藏南路218号永银大厦5层591",
}
const ContHome = {
    banner: cloudUrl + '/home/1.jpg',
    list: [
        { "pic": cloudUrl + '/home/L1-0.jpg', "picCont": cloudUrl + '/home/L1-1.jpg', "title": "<p>我们的使命</p>", "des": "<p>为客户创造真实持久的价值</p><p>为员工创造持续发展的机会</p>" },
        { "pic": cloudUrl + '/home/L2-0.jpg', "picCont": cloudUrl + '/home/L2-1.jpg', "title": "<p>品质保障</p><p>真实持久的价值</p>", "des": "<p>我们的承诺与保证</p><p>更专业、更及时、更有效</p><p>&nbsp;</p><p>Our Commitments & Warranties<br/>Professional Promptly Efficient</p>" },
        { "pic": cloudUrl + '/home/L3-0.jpg', "picCont": cloudUrl + '/home/L3-1.jpg', "title": "<p>提供集成  解决方案</p>", "des": "<p>技术服务、质量服务、制造支持服务</p><p>&nbsp;</p><p>Quality Service<br/>Technical Service<br/>Production Support Service</p>" },
        { "pic": cloudUrl + '/home/L4-0.jpg', "picCont": cloudUrl + '/home/L4-1.jpg', "title": "<p>高素质  训练团队</p>", "des": "<p>检验员团队搭建、供应商能力提升、质量体系培训、质量工具培训</p><p>&nbsp;</p><p>Inspector Team Build<br/>Supplier Capability Promotion<br/>Quality System Training<br/>Quality tools Training</p>" },
        { "pic": cloudUrl + '/home/L5-0.jpg', "picCont": cloudUrl + '/home/L5-1.jpg', "title": "<p>质量管理  信息化</p>", "des": "<p>大量制造型企业的真实数据、<br/>大量的质量服务经验、<br/>优质客户的需求、完善的解决方案</p><p>&nbsp;</p><p>Inspector Team Build<br/>Supplier Capability Promotion<br/>Quality System Training<br/>Quality tools Training</p>" }
    ],
    product: [
        { "pic": cloudUrl + '/home/p1.jpg', "title": "产品检验" },
        { "pic": cloudUrl + '/home/p2.jpg', "title": "产品返修" },
        { "pic": cloudUrl + '/home/p3.jpg', "title": "检测服务" },
        { "pic": cloudUrl + '/home/p4.jpg', "title": "技术支持" },
        { "pic": cloudUrl + '/home/p5.jpg', "title": "培训服务" },
    ],
    detail: {
        /*市场优势*/
        'market': [
            { "pic": cloudUrl + '/detail/market/1-1.jpg', 'picCont': cloudUrl + '/detail/market/1-2.jpg', 'detail': cloudUrl + '/detail/market/1-3.png', 'dShow': false, "title": "市场现状" },
            { "pic": cloudUrl + '/detail/market/2-1.jpg', 'picCont': cloudUrl + '/detail/market/2-2.jpg', 'detail': cloudUrl + '/detail/market/2-3.png', 'dShow': false, "title": "行业痛点" },
            { "pic": cloudUrl + '/detail/market/3-1.jpg', 'picCont': cloudUrl + '/detail/market/3-2.jpg', 'detail': cloudUrl + '/detail/market/3-3.png', 'dShow': false, "title": "市场规模" },
            { "pic": cloudUrl + '/detail/market/4-1.jpg', 'picCont': cloudUrl + '/detail/market/4-2.jpg', 'detail': cloudUrl + '/detail/market/4-3.png', 'dShow': false, "title": "竞争分析" },
        ],
        /*服务流程*/
        'service': [
            { "pic": cloudUrl + '/detail/service/1-1.jpg', 'picCont': cloudUrl + '/detail/service/1-2.jpg', 'detail': cloudUrl + '/detail/service/1-3.png', 'dShow': false, "title": "" },
            { "pic": cloudUrl + '/detail/service/2-1.jpg', 'picCont': cloudUrl + '/detail/service/2-2.jpg', 'detail': cloudUrl + '/detail/service/2-3.png', 'dShow': false, "title": "" },
            { "pic": cloudUrl + '/detail/service/3-1.jpg', 'picCont': cloudUrl + '/detail/service/3-2.jpg', 'detail': cloudUrl + '/detail/service/3-3.png', 'dShow': false, "title": "" },
            { "pic": cloudUrl + '/detail/service/4-1.jpg', 'picCont': cloudUrl + '/detail/service/4-2.jpg', 'detail': cloudUrl + '/detail/service/4-3.png', 'dShow': false, "title": "" },
        ],
    }
}
// export default {
//     Logo,
//     Nav
// }
module.exports = {
    BaseUrl,
    Logo,
    Nav,
    Copyright,
    ContHome
}