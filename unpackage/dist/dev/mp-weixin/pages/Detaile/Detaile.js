"use strict";
const common_vendor = require("../../common/vendor.js");
const store_homeStore = require("../../store/homeStore.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  (topNavbar + banner + goodsinfoDetaile)();
}
const topNavbar = () => "./c-pns/top-nav-bar.js";
const banner = () => "./c-pns/banner.js";
const goodsinfoDetaile = () => "./c-pns/goodsInfoDetaile.js";
const _sfc_main = {
  __name: "Detaile",
  props: {
    iid: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const homestore = store_homeStore.useHomeStore();
    const {
      currentGoodsData,
      DetaileBanners
    } = common_vendor.storeToRefs(homestore);
    common_vendor.onLoad(() => {
      homestore.fetchgethomeDetaileData(props.iid);
    });
    function handelitemCLick(index) {
      console.log("导航栏点击了", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handelitemCLick),
        b: common_vendor.p({
          banner: common_vendor.unref(DetaileBanners)
        }),
        c: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/Detaile.vue"]]);
wx.createPage(MiniProgramPage);
