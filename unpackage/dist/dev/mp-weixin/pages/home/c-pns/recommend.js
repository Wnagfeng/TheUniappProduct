"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "recommend",
  props: {
    recommend: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["recommendItemClick"],
  setup(__props, { emit }) {
    function RecommenditemClick(item) {
      emit("recommendItemClick", item.link);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommend, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => RecommenditemClick(item), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/home/c-pns/recommend.vue"]]);
wx.createComponent(Component);
