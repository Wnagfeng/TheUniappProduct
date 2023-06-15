"use strict";
const common_vendor = require("../../common/vendor.js");
const store_category = require("../../store/category.js");
require("../../service/category.js");
require("../../service/index.js");
if (!Math) {
  (leftNav + categoreGrid)();
}
const leftNav = () => "./c-pns/leftNav.js";
const categoreGrid = () => "./c-pns/categoryGrid.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const categoryStore = store_category.useCategoryStore();
    const {
      list,
      subcategorydata,
      types
    } = common_vendor.storeToRefs(categoryStore);
    common_vendor.onLoad(() => {
      categoryStore.fetchgetcategoryData();
      handelnavLClick({
        maitKey: 3627,
        miniWallkey: 10062603
      });
    });
    function handelnavLClick(data) {
      categoryStore.fetchgetsubcategorydata(data.maitKey);
      categoryStore.changeCurrentList(data);
      handelitemClcik();
    }
    function handelitemClcik() {
      categoryStore.fetchgetsubcategoryDetailedata();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handelnavLClick),
        b: common_vendor.p({
          itemdata: common_vendor.unref(list)
        }),
        c: common_vendor.o(handelitemClcik),
        d: common_vendor.p({
          itemdata: common_vendor.unref(subcategorydata)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
