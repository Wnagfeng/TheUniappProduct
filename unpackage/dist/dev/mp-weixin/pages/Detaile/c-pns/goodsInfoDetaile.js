"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "goodsInfoDetaile",
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
      return common_vendor.e({
        a: common_vendor.t((_a = props.itemdata.skuInfo) == null ? void 0 : _a.title),
        b: common_vendor.t((_b = props.itemdata.skuInfo) == null ? void 0 : _b.priceRange),
        c: common_vendor.t((_c = props.itemdata.itemInfo) == null ? void 0 : _c.lowPrice),
        d: common_vendor.t((_d = props.itemdata.itemInfo) == null ? void 0 : _d.discountDesc),
        e: props.itemdata.columns
      }, props.itemdata.columns ? {
        f: common_vendor.t(props.itemdata.columns[0]),
        g: common_vendor.t(props.itemdata.columns[1]),
        h: common_vendor.t((_e = props.itemdata.shopInfo) == null ? void 0 : _e.services[props.itemdata.shopInfo.services.length - 1].name)
      } : {}, {
        i: props.itemdata.shopInfo
      }, props.itemdata.shopInfo ? common_vendor.e({
        j: (_f = props.itemdata.shopInfo) == null ? void 0 : _f.services[0].icon
      }, ((_g = props.itemdata.shopInfo) == null ? void 0 : _g.services[0].icon) ? {
        k: (_h = props.itemdata.shopInfo) == null ? void 0 : _h.services[0].icon
      } : {}, {
        l: common_vendor.t((_i = props.itemdata.shopInfo) == null ? void 0 : _i.services[0].name),
        m: (_j = props.itemdata.shopInfo) == null ? void 0 : _j.services[1].icon
      }, ((_k = props.itemdata.shopInfo) == null ? void 0 : _k.services[1].icon) ? {
        n: (_l = props.itemdata.shopInfo) == null ? void 0 : _l.services[1].icon
      } : {}, {
        o: common_vendor.t((_m = props.itemdata.shopInfo) == null ? void 0 : _m.services[1].name),
        p: (_n = props.itemdata.shopInfo) == null ? void 0 : _n.services[2].icon
      }, ((_o = props.itemdata.shopInfo) == null ? void 0 : _o.services[2].icon) ? {
        q: (_p = props.itemdata.shopInfo) == null ? void 0 : _p.services[2].icon
      } : {}, {
        r: common_vendor.t((_q = props.itemdata.shopInfo) == null ? void 0 : _q.services[2].name),
        s: (_r = props.itemdata.shopInfo) == null ? void 0 : _r.services[3].icon
      }, ((_s = props.itemdata.shopInfo) == null ? void 0 : _s.services[3].icon) ? {
        t: (_t = props.itemdata.shopInfo) == null ? void 0 : _t.services[3].icon
      } : {}, {
        v: common_vendor.t((_u = props.itemdata.shopInfo) == null ? void 0 : _u.services[3].name)
      }) : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WangFeng/Desktop/uni-app学习/WfMall/pages/Detaile/c-pns/goodsInfoDetaile.vue"]]);
wx.createComponent(Component);
