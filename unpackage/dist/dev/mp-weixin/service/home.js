"use strict";
const service_index = require("./index.js");
const getHomeMutidata = () => {
  return service_index.hyrequest.get("/home/multidata", {});
};
const getHomeData = (type = "pop", page = 1) => {
  return service_index.hyrequest.get("/home/data", {
    type,
    page
  });
};
const gethomedetaileData = (iid) => {
  return service_index.hyrequest.get("/detail", {
    iid
  });
};
const getHomeRecommenDara = () => {
  return service_index.hyrequest.get("/recommend", {});
};
exports.getHomeData = getHomeData;
exports.getHomeMutidata = getHomeMutidata;
exports.getHomeRecommenDara = getHomeRecommenDara;
exports.gethomedetaileData = gethomedetaileData;
