"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "skuInfo",
  props: {
    itemdata: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.itemdata.skuInfo.title)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/skuInfo.vue"]]);
wx.createComponent(Component);
