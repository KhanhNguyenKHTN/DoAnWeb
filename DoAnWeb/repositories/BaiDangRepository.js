var data = require('../connection/ConnectDatabase');
var express = require('express');
var router = express.Router();

exports.createBaiDang = baiDang => {
    var sql =
        `insert into bai_dang(chuyen_muc_id,nguoi_dung_id,tag_id, tieu_de, ngay_dang, hinh_anh, noi_dung_tom_tat, luot_xem, tinh_trang)
         values(${baidang.chuyen_muc_id}, '${baidang.nguoi_dung_id}','${baidang.tag_id}', '${baidang.tieu_de}', null, null,'${baidang.noi_dung_tom_tat}','${baidang.luot_xem}', '${baidang.tinh_trang}'); `;
    return data.save(sql);
}

exports.searchBaiDang = (tieu_de, noi_dung_tom_tat, tag, chuyen_muc) =>{
    
}

exports.getBaiDangById = baiDangId => {
    var sql = `select * from bai_dang where id = ${baiDangId}`;
    return data.load(sql);
}
function getBaiDangById(BaiDangId) {
    var sql = `select * from bai_dang where id = ` + BaiDangId;
    return data.load(sql);
}
function getReference(chuyen_muc_id) {
    var sql = `select * from bai_dang where chuyen_muc_id = ` + chuyen_muc_id;
    return data.load(sql);
}
function getLastestBaiViet() {
    var query = "SELECT * FROM bai_dang WHERE tinh_trang ='Xuât bản' ORDER BY  ngay_dang DESC LIMIT 10";
    return data.load(query);
}
function getTopViewBaiViet() {
    var query = "SELECT * FROM bai_dang WHERE tinh_trang ='Xuât bản' ORDER BY luot_xem  DESC LIMIT 10";
    return data.load(query);
}
function getTop10ChuyenMuc() {
    var query = "SELECT * FROM bai_dang WHERE tinh_trang ='Xuât bản'  GROUP BY chuyen_muc_id LIMIT 10";
    return data.load(query);
}
function getTop3Week() {
    var query = "SELECT * FROM bai_dang WHERE tinh_trang ='Xuât bản' ORDER BY ngay_dang DESC, luot_xem ASC   LIMIT 3";
    return data.load(query);
}
module.exports.getTop3Week = getTop3Week;
module.exports.getTop10ChuyenMuc = getTop10ChuyenMuc;
module.exports.getTopViewBaiViet = getTopViewBaiViet;
module.exports.getLastestBaiViet = getLastestBaiViet;
module.exports.getBaiDangById = getBaiDangById;
module.exports.getReference = getReference;
//module.exports = router;