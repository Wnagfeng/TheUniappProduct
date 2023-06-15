"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "GridItem",
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
        a: props.itemdata.img,
        b: common_vendor.t(props.itemdata.title),
        c: common_vendor.t(props.itemdata.orgPrice),
        d: common_assets._imports_0$1,
        e: common_vendor.t(props.itemdata.cfav)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/category/c-pns/GridItem.vue"]]);
wx.createComponent(Component);
