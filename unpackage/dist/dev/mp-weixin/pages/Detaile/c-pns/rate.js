"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_common = require("../../../utils/common.js");
const _sfc_main = {
  __name: "rate",
  props: {
    itemdata: {
      type: Object,
      default: () => {
        return {};
      }
    },
    recommendData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const showDate = common_vendor.computed(() => {
      return (value) => {
        let date = new Date(value * 1e3);
        return utils_common.formatDate(date, "yyyy-MM-dd");
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.itemdata.rate.list, (item, k0, i0) => {
          return {
            a: item.user.avatar,
            b: common_vendor.t(item.user.uname),
            c: common_vendor.t(item.content),
            d: common_vendor.t(common_vendor.unref(showDate)(item.created)),
            e: common_vendor.t(item.style)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/rate.vue"]]);
wx.createComponent(Component);
