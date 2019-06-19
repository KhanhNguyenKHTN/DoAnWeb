var data = require('../connection/ConnectDatabase');
var express = require('express');
var router = express.Router();

exports.getDocGiaById = docGiaId => {
    var sql = `select * from nguoi_dung where id = ${docGiaId} and chuc_vu_id = 1`;
    return data.load(sql);
}

exports.updateThongTin = user => {
    var sql = `update nguoi_dung set ten_nguoi_dung = '${user.ten_nguoi_dung}', email = '${user.email}', so_dien_thoai = '${user.so_dien_thoai}', dia_chi ='${user.dia_chi}'  where id = '${user.id}'`;
    return data.load(sql);
}

function getDanhMuc() {
    var query = "SELECT * FROM chuyen_muc WHERE tinh_trang ='hoạt động'";
    return data.load(query);
}
function getNameDanhMuc(id) {
    var query = "SELECT * FROM loai_chuyen_muc_ WHERE id =" + id;
    return data.load(query);
}
function addDanhMuc(type_id, type, tinh_trang, date) {
    var sql = `insert into chuyen_muc(loai_chuyen_muc_id, ten_chuyen_muc, tinh_trang, date) 
    values(` + type_id + ",\"" + type + "\",\"" + tinh_trang + "\",\"" + date + "\")";
    console.log(sql);
    return data.save(sql);
}
module.exports.addDanhMuc = addDanhMuc;
module.exports.getNameDanhMuc = getNameDanhMuc;
module.exports.getDanhMuc = getDanhMuc;