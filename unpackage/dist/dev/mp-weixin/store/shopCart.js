"use strict";
const common_vendor = require("../common/vendor.js");
const useShopStore = common_vendor.defineStore("Shop", {
  state: () => {
    return {
      shopdata: {}
    };
  },
  actions: {}
});
exports.useShopStore = useShopStore;
