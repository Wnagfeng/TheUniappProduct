"use strict";
const service_index = require("./index.js");
function getcategoryData() {
  return service_index.hyrequest.get("/category", {});
}
function getsubcategorydata(maitKey) {
  return service_index.hyrequest.get("/subcategory", {
    maitKey
  });
}
function getsubcategoryDetailedata(miniWallkey, type) {
  return service_index.hyrequest.get("/subcategory/detail", {
    miniWallkey,
    type
  });
}
exports.getcategoryData = getcategoryData;
exports.getsubcategoryDetailedata = getsubcategoryDetailedata;
exports.getsubcategorydata = getsubcategorydata;
