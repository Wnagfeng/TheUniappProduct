"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "itemParams",
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
        a: common_vendor.f(props.itemdata.itemParams.rule.tables[0], (item, k0, i0) => {
          return {
            a: common_vendor.f(item, (iten, k1, i1) => {
              return {
                a: common_vendor.t(iten)
              };
            })
          };
        }),
        b: common_vendor.f(props.itemdata.itemParams.info.set, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.key),
            b: common_vendor.t(item.value)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/itemParams.vue"]]);
wx.createComponent(Component);
