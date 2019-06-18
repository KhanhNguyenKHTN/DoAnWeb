var data = require('../connection/ConnectDatabase');

function getListChuyenMuc(){
    var sql = `select * from chuyen_muc`;
    return data.load(sql);
}
module.exports.getListChuyenMuc = getListChuyenMuc;