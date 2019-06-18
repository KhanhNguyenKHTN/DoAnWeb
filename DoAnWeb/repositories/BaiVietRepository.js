var data = require('../connection/ConnectDatabase');
var express = require('express');
var router = express.Router();

exports.createBaiViet = baiViet => {
    var sql = `insert into bai_viet(bai_dang_id,noi_dung_bai_viet) 
    values('${baiViet.bai_dang_id}','${baiViet.noi_dung_bai_viet}')`;
    return data.save(sql);
}

exports.getBaiVietById = id =>{
    var sql = `select * from bai_viet where bai_dang_id = ${id}`;
    return data.load(sql);
}

module.exports = router;