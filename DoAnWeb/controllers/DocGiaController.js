var express = require('express'),
    baiDangRepository = require('../repositories/BaiDangRepository');

var router = express.Router();


router.get('/thongtinchitiet', function (req, res, next) {
    // lay account tu session ko lay theo id truyen vao
    // var docGiaId = req.params.id;
    // docgiaRepository.getDocGiaById(docGiaId).then(data => {
    //     if (data.length > 0) {
    //         user = {
    //             ten_nguoi_dung: data[0].ten_nguoi_dung,
    //             ngay_sinh: data[0].ngay_sinh,
    //             so_dien_thoai: data[0].so_dien_thoai,
    //             email: data[0].email,
    //             dia_chi: data[0].dia_chi
    //         }
    //     }
    // });
    var docgia ={
        Ten: 'Nguyễn Văn A',
        CMND: '123456789',
        DiaChi: '123 Nguyễn Xí',
        Sdt: '0123456798',
        Email: 'nva@gmail.com'
    };
    res.render('docgia/capnhatthongtindocgia',
        {
            DocGia: docgia,
            layout: 'subLayout',
        });
});
router.post('/thongtinchitiet', function (req, res) {
    //lay account tu session ra rồi thay đổi giá trị dưới database theo data mới này
    console.log('aaaaa');
    console.log(req.body);
    var docgia ={
        Ten: req.body.Name,
        CMND: req.body.IdNumber,
        DiaChi: req.body.Address,
        Sdt: req.body.Phone,
        Email: req.body.Email
    };
    res.render('docgia/capnhatthongtindocgia',
        {
            DocGia: docgia,
            layout: 'subLayout',
        });
});



module.exports = router;