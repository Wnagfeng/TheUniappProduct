"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const typs = ["pop", "sell", "new"];
function createGoodsListdata() {
  let goodsListOrangin = {};
  typs.forEach((item) => {
    goodsListOrangin[item] = {
      page: 0,
      list: []
    };
  });
  return goodsListOrangin;
}
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: [],
      goodsList: createGoodsListdata(),
      currentType: "pop",
      currentGoodsData: {},
      DetaileBanners: []
    };
  },
  actions: {
    async fetchgetHomeMUtidata() {
      const res = await service_home.getHomeMutidata();
      this.banners = res.data.banner.list || [];
      this.recommends = res.data.recommend.list || [];
    },
    async fetchgetHomeData(type, page) {
      const res = await service_home.getHomeData(type, page);
      this.goodsList[type].list.push(...res.data.list);
      this.goodsList[type].page = page;
    },
    setcurrentType(type) {
      this.currentType = type;
    },
    async fetchgethomeDetaileData(iid) {
      const res = await service_home.gethomedetaileData(iid);
      this.currentGoodsData = res.result;
      this.DetaileBanners = res.result.itemInfo.topImages;
    }
  }
});
exports.typs = typs;
exports.useHomeStore = useHomeStore;
