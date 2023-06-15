"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "shopInfo",
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
    const formateNumber = common_vendor.computed(() => {
      return (number) => {
        if (number < 1e4)
          return number;
        return (number / 1e4).toFixed(1) + "万";
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.itemdata.shopInfo
      }, props.itemdata.shopInfo ? {
        b: props.itemdata.shopInfo.shopLogo,
        c: common_vendor.t(props.itemdata.shopInfo.name),
        d: common_vendor.t(common_vendor.unref(formateNumber)(props.itemdata.shopInfo.cSells)),
        e: common_vendor.t(props.itemdata.shopInfo.cGoods),
        f: common_vendor.f(props.itemdata.shopInfo.score, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.score),
            c: common_vendor.n(item.isBetter ? "active" : "noactive"),
            d: item.isBetter
          }, item.isBetter ? {} : {});
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/shopInfo.vue"]]);
wx.createComponent(Component);
