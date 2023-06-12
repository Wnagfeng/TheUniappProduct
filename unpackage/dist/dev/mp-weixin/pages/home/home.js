"use strict";
const common_vendor = require("../../common/vendor.js");
const store_homeStore = require("../../store/homeStore.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_selectTabBar2 = common_vendor.resolveComponent("selectTabBar");
  _easycom_selectTabBar2();
}
const _easycom_selectTabBar = () => "../../components/selectTabBar/selectTabBar.js";
if (!Math) {
  (banner + recommend + _easycom_selectTabBar)();
}
const banner = () => "./c-pns/banner.js";
const recommend = () => "./c-pns/recommend.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const tabBar = ["流行", "新款", "精选"];
    const homestore = store_homeStore.useHomeStore();
    const {
      banners,
      recommends
    } = common_vendor.storeToRefs(homestore);
    common_vendor.onLoad(() => {
      console.log("home");
      homestore.fetchgetHomeMUtidata();
    });
    function handelbannerItemCLick(event) {
      common_vendor.wx$1.navigateTo({
        url: "/pages/home/c-page/bannerDetaile/bannerDetaile?link=" + event
      });
    }
    function handelrecommendItemClick(event) {
      common_vendor.wx$1.navigateTo({
        url: "/pages/home/c-page/bannerDetaile/bannerDetaile?link=" + event
      });
    }
    function handelitemClik(index) {
      console.log(tabBar[index]);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handelbannerItemCLick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(handelrecommendItemClick),
        d: common_vendor.p({
          recommend: common_vendor.unref(recommends)
        }),
        e: common_vendor.o(handelrecommendItemClick),
        f: common_vendor.p({
          recommend: common_vendor.unref(recommends)
        }),
        g: common_vendor.o(handelrecommendItemClick),
        h: common_vendor.p({
          recommend: common_vendor.unref(recommends)
        }),
        i: common_vendor.o(handelitemClik),
        j: common_vendor.p({
          tabBar
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
