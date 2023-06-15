"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detailInfo",
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
      return common_vendor.e({
        a: props.itemdata.detailInfo
      }, props.itemdata.detailInfo ? {
        b: common_vendor.t(props.itemdata.detailInfo.detailImage[0].key),
        c: common_vendor.f(props.itemdata.detailInfo.detailImage[0].list, (item, k0, i0) => {
          return {
            a: item
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/detailInfo.vue"]]);
wx.createComponent(Component);
