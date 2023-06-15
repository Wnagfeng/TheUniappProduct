"use strict";
const common_vendor = require("../common/vendor.js");
const service_category = require("../service/category.js");
const useCategoryStore = common_vendor.defineStore("category", {
  state: () => {
    return {
      list: [],
      subcategorydata: {},
      types: ["pop", "new", "sell"],
      typeIndex: 0,
      currentList: {},
      currentListDetaile: []
    };
  },
  actions: {
    async fetchgetcategoryData() {
      const res = await service_category.getcategoryData();
      this.list = res.data.category.list;
      this.currentList = res.data.category.list[0];
    },
    async fetchgetsubcategorydata(maitKey) {
      const res = await service_category.getsubcategorydata(maitKey);
      this.subcategorydata = res;
    },
    async fetchgetsubcategoryDetailedata(miniWallkey) {
      const res = await service_category.getsubcategoryDetailedata(this.currentList.miniWallkey, this.types[this.typeIndex]);
      this.currentListDetaile = res;
    },
    changetypeIndex(inex) {
      console.log(inex);
      this.typeIndex = inex;
    },
    changeCurrentList(data) {
      this.currentList = data;
    }
  }
});
exports.useCategoryStore = useCategoryStore;
