"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "top-nav-bar",
  props: {
    tabbar: {
      type: Array,
      default: () => {
        return [
          {
            title: "商品",
            id: 0
          },
          {
            title: "参数",
            id: 1
          },
          {
            title: "评论",
            id: 2
          },
          {
            title: "推荐",
            id: 3
          }
        ];
      }
    }
  },
  emits: ["itemCLick"],
  setup(__props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    function itemClick(index) {
      currentIndex.value = index;
      emit("itemCLick", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.tabbar, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(currentIndex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => itemClick(index), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/top-nav-bar.vue"]]);
wx.createComponent(Component);
