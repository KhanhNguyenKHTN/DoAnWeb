var express = require('express');
var data = require('../connection/ConnectDatabase');
var router = express.Router();

exports.createBaiViet = baiViet => {
    var sql = `insert into bai_viet(bai_dang_id,noi_dung_bai_viet) 
    values('${baiViet.bai_dang_id}','${baiViet.noi_dung_bai_viet}')`;
    return data.save(sql);
}

exports.getListBaiViet = baiDangId =>{
    var sql = `select * from bai_viet where bai_dang_id = ${baiDangId}`;
    return data.load(sql);
}
function getListBaiViet(baiDangId) {
    var sql = `select * from bai_viet where bai_dang_id = ` + baiDangId;
    return data.load(sql);
}

module.exports.getListBaiViet = getListBaiViet;

//module.exports = router;