"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "leftNav",
  props: {
    itemdata: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["navLClick"],
  setup(__props, { emit }) {
    const props = __props;
    const currentNavINdex = common_vendor.ref(0);
    function navclick(item, index) {
      emit("navLClick", item);
      currentNavINdex.value = index;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.itemdata, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(currentNavINdex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => navclick(item, index), item.maitKey),
            d: item.maitKey
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/category/c-pns/leftNav.vue"]]);
wx.createComponent(Component);
