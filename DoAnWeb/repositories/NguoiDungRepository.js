var data = require('../connection/ConnectDatabase');
function GetUserById(id) {
    var sql = `select * from nguoi_dung where id = ` + id;
    return data.load(sql);
}
module.exports.GetUserById = GetUserById;