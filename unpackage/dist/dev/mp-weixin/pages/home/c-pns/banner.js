"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "banner",
  props: {
    banners: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["bannerItemCLick"],
  setup(__props, { emit }) {
    function banneritemClick(item) {
      emit("bannerItemCLick", item.link);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => banneritemClick(item), item),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/home/c-pns/banner.vue"]]);
wx.createComponent(Component);
