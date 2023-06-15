"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_category = require("../../../store/category.js");
require("../../../service/category.js");
require("../../../service/index.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + selectTabBar + GridItem)();
}
const selectTabBar = () => "../../../components/selectTabBar/selectTabBar.js";
const GridItem = () => "./GridItem.js";
const _sfc_main = {
  __name: "categoryGrid",
  props: {
    itemdata: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ["itemClcik"],
  setup(__props, { emit }) {
    const props = __props;
    const categorey = store_category.useCategoryStore();
    const {
      currentListDetaile
    } = common_vendor.storeToRefs(categorey);
    const tabBar = ["流行", "新款", "精选"];
    function handelitemClik(index) {
      categorey.changetypeIndex(index);
      emit("itemClcik", index);
    }
    function handelGridItemCLick() {
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.itemdata.key
      }, props.itemdata.key ? {
        b: common_vendor.f(props.itemdata.data.list, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: "8aa4c86e-1-" + i0 + ",8aa4c86e-0",
            d: index
          };
        }),
        c: common_vendor.p({
          column: 3,
          ["border-color"]: "#fff"
        }),
        d: common_vendor.o(handelitemClik),
        e: common_vendor.p({
          tabBar
        }),
        f: common_vendor.f(common_vendor.unref(currentListDetaile), (item, index, i0) => {
          return {
            a: common_vendor.o(handelGridItemCLick, item.iid),
            b: "8aa4c86e-5-" + i0 + "," + ("8aa4c86e-4-" + i0),
            c: common_vendor.p({
              itemdata: item
            }),
            d: "8aa4c86e-4-" + i0 + ",8aa4c86e-3",
            e: common_vendor.p({
              index
            }),
            f: item.iid
          };
        }),
        g: common_vendor.p({
          column: 2,
          ["border-color"]: "#fff",
          square: false
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/category/c-pns/categoryGrid.vue"]]);
wx.createComponent(Component);
