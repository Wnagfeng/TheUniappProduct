"use strict";
const common_vendor = require("../../common/vendor.js");
const store_homeStore = require("../../store/homeStore.js");
const store_shopCart = require("../../store/shopCart.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  (topNavbar + banner + goodsinfoDetaile + ShopInfo + Skuinfo + detaileInfo + itemParams + rate + recommenList + goodsNav)();
}
const topNavbar = () => "./c-pns/top-nav-bar.js";
const banner = () => "./c-pns/banner.js";
const goodsinfoDetaile = () => "./c-pns/goodsInfoDetaile.js";
const ShopInfo = () => "./c-pns/shopInfo.js";
const Skuinfo = () => "./c-pns/skuInfo.js";
const detaileInfo = () => "./c-pns/detailInfo.js";
const goodsNav = () => "./c-pns/goodsNav.js";
const itemParams = () => "./c-pns/itemParams.js";
const rate = () => "./c-pns/rate.js";
const recommenList = () => "./c-pns/recommendList.js";
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
    store_shopCart.useShopStore();
    const currentPageindex = common_vendor.ref(0);
    const {
      currentGoodsData,
      DetaileBanners,
      RecommendList
    } = common_vendor.storeToRefs(homestore);
    common_vendor.onLoad(() => {
      homestore.fetchgethomeDetaileData(props.iid);
      homestore.fetchgetHomerecommendData();
    });
    function handelitemCLick(index) {
      console.log("导航栏点击了", index);
      currentPageindex.value = index;
    }
    function handelgoodsNavClick() {
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handelitemCLick),
        b: currentPageindex.value === 0
      }, currentPageindex.value === 0 ? common_vendor.e({
        c: common_vendor.unref(currentGoodsData).skuInfo
      }, common_vendor.unref(currentGoodsData).skuInfo ? {
        d: common_vendor.p({
          banner: common_vendor.unref(DetaileBanners)
        }),
        e: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        }),
        f: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        }),
        g: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        }),
        h: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        })
      } : {}) : currentPageindex.value === 1 ? {
        j: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        })
      } : currentPageindex.value === 2 ? {
        l: common_vendor.p({
          itemdata: common_vendor.unref(currentGoodsData)
        })
      } : currentPageindex.value === 3 ? {
        n: common_vendor.p({
          Recommenddata: common_vendor.unref(RecommendList)
        })
      } : {}, {
        i: currentPageindex.value === 1,
        k: currentPageindex.value === 2,
        m: currentPageindex.value === 3,
        o: common_vendor.o(handelgoodsNavClick)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/Detaile.vue"]]);
wx.createPage(MiniProgramPage);
