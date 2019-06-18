var express = require('express');
var router = express.Router();

var taikhoanRepository = require('../repositories/TaiKhoanRepository');
/*------------------ DANG NHAP --------------------------*/
router.get('/dangnhap', function (req, res, next) {
    res.render('taikhoan/login', { layout: 'subLayout', Page: 'dangnhap' });
});

router.post('/dangnhap', (req, res) => {
    //check duoi database
    req.check('password','Mật khẩu không được để trống').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.render('taikhoan/login', { layout: 'subLayout', Page: 'dangnhap'  , success: false, errors: errors});
     } else {
         //redirect toi trang home nếu login thành công
         //get data check các kiểu ở đây


        req.session.success = true;
        res.render('taikhoan/login', { layout: 'subLayout', Page: 'dangnhap'  , success: true, errors: {}});
    }
    // var user = {
    //     userName: req.body.username,
    //     passWord: req.body.password
    // };
    // console.log(user.username + "-" + user.password);
    // taikhoanRepository.login(user).then(rows => {
    //     if (rows.length > 0) {
    //         req.session.isLogged = true;
    //         req.session.curUser = rows[0];
    //         console.log("dang nhap thanh cong");
    //         var url = req.header('Referer');
    //         if (url = "http://localhost:8000/taikhoan/dangnhap")
    //             res.redirect("/");
    //         else
    //             res.redirect('/home');
    //     } else {
    //         console.log("dang nhap that bai");
    //         var vm = {
    //             showError: true,
    //             errorMsg: 'Login failed'
    //         };
    //         res.render('taikhoan/login', { layout: undefined });
    //     }
    // });
});

/*------------------ DANG KY--------------------------*/
router.post('/dangky', (req, res) => {
    //check duoi database
    console.log(req.body);
    req.check('password','Mật khẩu không được để trống').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.render('taikhoan/login', { layout: 'subLayout', Page: 'dangnhap'  , success1: false, errors1: errors});
     } else {
         //redirect toi trang home nếu login thành công
         //get data check các kiểu ở đây


        req.session.success = true;
        res.render('taikhoan/login', { layout: 'subLayout', Page: 'dangnhap'  , success1: true, errors1: {}});
    }
    //check validate như mấy cái trên
    // var mes;
    // taikhoanRepository.checkAccountExist(req.body.username).then(value => {
    //     if (value[0].total == 0) {
    //         var user = {
    //             chuc_vu: 1,
    //             username: req.body.ten_dang_nhap,
    //             password: req.body.mat_khau,
    //             ten_nguoi_dung: req.body.ten_nguoi_dung,
    //             bi_danh: '',
    //             ngay_sinh: req.body.ngay_sinh,
    //             so_dien_thoai: req.body.so_dien_thoai,
    //             email: req.body.email,
    //             dia_chi: req.body.dia_chi,
    //             tinh_trang: 1
    //         };
    //         console.log(user);
    //         mes = 'Đăng ký tài khoản thành công !!';
    //         taikhoanRepository.add(user).then(value => {
    //             res.render('taikhoan/login', { layout: undefined });
    //         });
    //     }
    //     else {
    //         mes = 'Đăng ký tài khoản thất bại !! Tên người dùng đã tồn tại';
    //         res.render('taikhoan/login', { layout: undefined });
    //     }
    // })
});

/*------------------ DOI MAT KHAU --------------------------*/
router.get('/doimatkhau', (req, res) => {
    res.render('taikhoan/doimatkhau', { layout: 'subLayout' });
    req.session.errors = null;
});

router.post('/doimatkhau', function (req, res) {
    req.check('matkhau','Mật khẩu không được để trống').notEmpty();
    req.check('matkhau1', 'Mật khẩu mới không được để trống').notEmpty();
    req.check('matkhau1', 'Mật khẩu không được nhỏ hơn 6 kí tự').isLength({ min: 6 });
    req.check('matkhau2', 'Mật khẩu không trùng.').equals(req.body.matkhau1);

    var errors = req.validationErrors();
    console.log(errors);
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.render('taikhoan/doimatkhau', { layout: 'subLayout' , success: false, errors: errors});
     } else {
         //xu ly database luu lai ne
        req.session.success = true;
        res.render('taikhoan/doimatkhau', { layout: 'subLayout' , success: true, errors: null});
      }
      

    // var user = {
    //     // TODO: add session
    //     username: req.session.curUser.username,
    //     password: req.body.matkhau
    // };
    // taikhoanRepository.login(user).then(rows => {
    //     if (rows.length > 0) {
    //         taikhoanRepository.changePassword(user).then(row => {
    //             res.render('/', 
    //             {
    //                 message: "Đổi mật khẩu thành công !!"
    //             })
    //         })
    //     }
    //     if(errors) {
    //         res.render('taikhoan/doimatkhau', 
    //         { 
    //             errors: errors,
    //             layout: undefined });
    //     }
    // });
});

router.get('/quenmatkhau', (req, res) => {
    res.render('taikhoan/quenmatkhau', { layout: 'subLayout' });
});

router.post('/quenmatkhau', function (req, res) {
    req.check('Email', 'Email nhập vào không đúng').isEmail();
    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.render('taikhoan/quenmatkhau', { layout: 'subLayout' , success: false, errors: errors});
     } else {
         //xu ly database luu lai ne
        req.session.success = true;
        res.render('taikhoan/quenmatkhau', { layout: 'subLayout' , success: true, errors: {}});
      }
});


module.exports = router;