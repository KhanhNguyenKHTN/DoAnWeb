var data = require('../connection/ConnectDatabase');

exports.createBaiDang = baiDang => {
    var sql =
        `insert into bai_dang(chuyen_muc_id, nguoi_dung_id, tieu_de, ngay_dang, hinh_anh,t ag, noi_dung_tom_tat,luot_xem,tinh_trang)
         values('${baiDang.chuyen_muc_id}','${baiDang.nguoi_dung_id}','${baiDang.tieu_de}','${baiDang.ngay_dang}',
         'null','${baiDang.tag}','${baiDang.noi_dung_tom_tat}','${baiDang.luot_xem}','${baiDang.tinh_trang}')`;
    return data.save(sql);
}

function login1(username, password) {
    var sql = "select * from nguoi_dung where username =\"" + username + "\" and PASSWORD = \"" + password + "\"";
    return data.load(sql);
}
module.exports.login1 = login1;

exports.login = user => {
    var sql = `select * from nguoi_dung where username = '${user.userName}' and password = '${user.passWord}'`;
    return data.load(sql);
}

exports.checkAccountExist = username => {
    var sql = `select count(*) as total from nguoi_dung where username = '${username}' `;
    return data.load(sql);
}

exports.add = user => {
    var sql = `insert into nguoi_dung(chuc_vu_id, username, password, ten_nguoi_dung, bi_danh, ngay_sinh,so_dien_thoai, email, dia_chi, tinh_trang) 
    values(${user.chuc_vu}, '${user.username}','${user.password}', '${user.ten_nguoi_dung}', '${user.bi_danh}', '${user.ngay_sinh}','${user.so_dien_thoai}','${user.email}', '${user.dia_chi}',${user.tinh_trang}); `;
    return data.save(sql);
}

/* ------------------------------- DOI MAT KHAU -------------------------*/
exports.changePassword = user => {
    var sql = `update nguoi_dung set password = '${user.password}' `;
    return data.load(sql);
}

