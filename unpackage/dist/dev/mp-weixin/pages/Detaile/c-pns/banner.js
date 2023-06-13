"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "banner",
  props: {
    banner: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(__props) {
    const props = __props;
    console.log(props.banner);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.banner, (item, k0, i0) => {
          return {
            a: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/banner.vue"]]);
wx.createComponent(Component);
