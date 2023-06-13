"use strict";
const common_vendor = require("../../common/vendor.js");
const store_homeStore = require("../../store/homeStore.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_selectTabBar2 = common_vendor.resolveComponent("selectTabBar");
  const _easycom_HomeGridItem2 = common_vendor.resolveComponent("HomeGridItem");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_selectTabBar2 + _easycom_HomeGridItem2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_selectTabBar = () => "../../components/selectTabBar/selectTabBar.js";
const _easycom_HomeGridItem = () => "../../components/HomeGridItem/HomeGridItem.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (banner + recommend + _easycom_selectTabBar + _easycom_HomeGridItem + _easycom_uni_grid_item + _easycom_uni_grid)();
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
      recommends,
      goodsList,
      currentType
    } = common_vendor.storeToRefs(homestore);
    common_vendor.onLoad(() => {
      console.log("home");
      homestore.fetchgetHomeMUtidata();
      homestore.fetchgetHomeData("pop", 1);
      homestore.fetchgetHomeData("new", 1);
      homestore.fetchgetHomeData("sell", 1);
    });
    common_vendor.onReachBottom(() => {
      homestore.fetchgetHomeData(currentType.value, goodsList.value[currentType.value].page + 1);
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
      homestore.setcurrentType(store_homeStore.typs[index]);
    }
    function handelGridItemCLick(data) {
      common_vendor.index.navigateTo({
        url: "/pages/Detaile/Detaile?iid=" + data.iid
      });
      console.log("Grid点击了", data.iid);
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
        }),
        k: common_vendor.f(common_vendor.unref(goodsList)[common_vendor.unref(currentType)].list, (item, index, i0) => {
          return {
            a: common_vendor.o(handelGridItemCLick, item.iid),
            b: "73ffeeff-7-" + i0 + "," + ("73ffeeff-6-" + i0),
            c: common_vendor.p({
              itemData: item
            }),
            d: "73ffeeff-6-" + i0 + ",73ffeeff-5",
            e: common_vendor.p({
              index
            }),
            f: item.iid
          };
        }),
        l: common_vendor.p({
          column: 2,
          ["border-color"]: "#fff",
          square: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
