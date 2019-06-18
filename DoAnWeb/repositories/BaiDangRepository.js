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
    var sql = `select * from bai_dang where bai_dang_id = ${baiDangId}`;
    return data.load(sql);
}

exports.getAllBaiDang = () => {
    var sql = `select * from bai_dang`;
    return data.load(sql);
}

module.exports = router;