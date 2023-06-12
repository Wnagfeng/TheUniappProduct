"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "selectTabBar",
  props: {
    tabBar: {
      tyep: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["itemClik"],
  setup(__props, { emit }) {
    const selectindex = common_vendor.ref(0);
    function ItemCLick(index) {
      selectindex.value = index;
      emit("itemClik", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.tabBar, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(selectindex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => ItemCLick(index))
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/components/selectTabBar/selectTabBar.vue"]]);
wx.createComponent(Component);
