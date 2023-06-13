"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "HomeGridItem",
  props: {
    itemData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ["GridItemCLick"],
  setup(__props, { emit }) {
    const props = __props;
    function GridItemClick() {
      emit("GridItemCLick", props.itemData);
    }
    return (_ctx, _cache) => {
      return {
        a: __props.itemData.showLarge.img,
        b: common_vendor.t(__props.itemData.title),
        c: common_vendor.t(__props.itemData.orgPrice),
        d: common_vendor.t(__props.itemData.cfav),
        e: common_vendor.o(GridItemClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/components/HomeGridItem/HomeGridItem.vue"]]);
wx.createComponent(Component);
