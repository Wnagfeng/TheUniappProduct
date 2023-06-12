"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "bannerDetaile",
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.link
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/home/c-page/bannerDetaile/bannerDetaile.vue"]]);
wx.createPage(MiniProgramPage);
