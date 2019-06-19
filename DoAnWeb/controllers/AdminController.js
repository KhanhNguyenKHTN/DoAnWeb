var express = require('express');
var repAdmin = require('../repositories/AdminRepository');
var repBaiDang = require('../repositories/BaiDangRepository');
var repUser = require('../repositories/NguoiDungRepository');
var router = express.Router();

router.get('/danhmuc', function (req, res, next) {
    var danhmuc = [{
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 1
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 2
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 3
    }];

    // repAdmin.getDanhMuc().then((dm) => {
    //     var temp = {
    //         loai_chuyen_muc_id: '',
    //         tinh_trang:'',
    //         ten_chuyen_muc:'',
    //         Date: ''
    //     }
    //     var DanhMuc = {
    //         Name: '',
    //         Status: '',
    //         Type: '',
    //         Date: '',
    //     }
    //     for (var i = 0; i <= dm.length; i++) {
    //         // console.log(dm[i]);
    //         temp = dm[i];
    //         repAdmin.getNameDanhMuc(temp.loai_chuyen_muc_id).then((data) => {
    //             DanhMuc.Name = data[0];
    //         });
    //         DanhMuc.Status = temp.tinh_trang;
    //         DanhMuc.Date = temp.date;
    //         DanhMuc.Type = temp.ten_chuyen_muc;
    //         console.log(DanhMuc);
    //         danhmuc.push(DanhMuc);
    //     }

    //     res.render('Admin/admin',
    //         {
    //             layout: 'subLayout',
    //             displayDetail: 'false',
    //             displayDashboard: 'true',
    //             tagAdmin: 'DanhMuc',
    //             Catalogy: danhmuc,
    //             TableName: 'Danh mục bài viết'
    //         });
    // });
    res.render('Admin/admin',
        {
            layout: 'subLayout',
            displayDetail: 'false',
            displayDashboard: 'true',
            tagAdmin: 'DanhMuc',
            Catalogy: danhmuc,
            TableName: 'Danh mục bài viết'
        });
});

router.post('/danhmuc', function (req, res, next) {
    console.log(req.body);


    var danhmuc = [{
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 1
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 2
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 3
    }];
    if (req.body.isDelete === "true") {
        // xoa khong ho tro cho html 5 nen goi post luon
        console.log("dele3te");
        //load lai data roi render lai
        res.render('Admin/admin',
            {
                layout: 'subLayout',
                displayDetail: 'false',
                displayDashboard: 'true',
                tagAdmin: 'DanhMuc',
                Catalogy: danhmuc,
                TableName: 'Danh mục bài viết'
            });
    } else {
        // them thi su ly cho nay
        var dt = new Date();
        var date = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
        var newDanhmuc = {
            Name: 1,
            Status: req.body.Status,
            Type: req.body.Type,
            Date: date,
            Id: 11
        };
        // luu cai new danh muc xuong database
        repAdmin.addDanhMuc(1, req.body.Type, req.body.Status, date);
        //load lai cai danh muc
        danhmuc.push(newDanhmuc);
        res.render('Admin/admin',
            {
                layout: 'subLayout',
                displayDetail: 'false',
                displayDashboard: 'true',
                tagAdmin: 'DanhMuc',
                Catalogy: danhmuc,
                TableName: 'Danh mục bài viết'
            });
    }
});


//tag
router.get('/tag', function (req, res, next) {
    var tags = [{
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 1
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 2
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 3
    }];
    res.render('Admin/admin',
        {
            layout: 'subLayout',
            displayDetail: 'false',
            displayDashboard: 'true',
            tagAdmin: 'Tag',
            Tags: tags,
            TableName: 'Tag bài viết'
        });
});
router.post('/tag', function (req, res, next) {
    console.log(req.body);
    var tags = [{
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 1
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 2
    },
    {
        Name: '123',
        Status: 'áv',
        Type: 'ád',
        Date: 'ád',
        Id: 3
    }];
    if (req.body.isDelete === "true") {
        // xoa khong ho tro cho html 5 nen goi post luon
        console.log("dele3te");
        //load lai data roi render lai
        res.render('Admin/admin',
            {
                layout: 'subLayout',
                displayDetail: 'false',
                displayDashboard: 'true',
                tagAdmin: 'Tag',
                Tags: tags,
                TableName: 'Tag bài viết'
            });
    } else {
        // them thi su ly cho nay
        var dt = new Date();
        var date = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
        var tag = {
            Name: req.body.Name,
            Status: req.body.Status,
            Type: req.body.Type,
            Date: date,
            Id: 5
        };
        // luu cai new danh muc xuong database

        //load lai cai danh muc
        tags.push(tag);
        res.render('Admin/admin',
            {
                layout: 'subLayout',
                displayDetail: 'false',
                displayDashboard: 'true',
                tagAdmin: 'Tag',
                Tags: tags,
                TableName: 'Tag bài viết'
            });
    }
});


//bai viet 
router.get('/baiviet', function (req, res, next) {
    var BaiDang = {
        data: {},
        tac_gia: ''
    };
    var baiVietDaPheDuyet = [];
    var BDXemNhieuNhat = [];
    var BDMoiNhat = [];
    var BDTopChuyenMuc = [];
    repBaiDang.getDaDuyet().then((daDuyet) => {
        for (var i = 0; i < daDuyet.length; i++) {
            BaiDang.data = daDuyet[i];
            console.log(BaiDang.data);
            repUser.GetUserById(BaiDang.data.nguoi_dung_id).then((user) => {
                BaiDang.tac_gia = user[0].ten_nguoi_dung;
                console.log(BaiDang.tac_gia);
            });
        }
        baiVietDaPheDuyet.push(BaiDang);
        console.log(baiVietDaPheDuyet);
    });



    // var baiVietDaPheDuyet = [{
    //     id: '1',
    //     titleBV: 'Test title1',
    //     tags: 'Nông sản',
    //     author: 'Khánh',
    //     date: '12/06/2019'
    // }, {
    //     id: '2',
    //     titleBV: 'Test title2',
    //     tags: 'Nông sản2',
    //     author: 'Khánh',
    //     date: '12/06/20192'
    // }, {
    //     id: '3',
    //     titleBV: 'Test title3',
    //     tags: 'Nông sản3',
    //     author: 'Khánh',
    //     date: '12/06/2019'
    // }];
    var baiVietChuaPheDuyet = [{
        id: '1',
        titleBV: 'Test title1',
        tags: 'Nông sản',
        author: 'Khánh',
        date: '12/06/2019'
    }, {
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    }, {
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    }];
    var baiVietLoaiBo = [{
        id: '1',
        titleBV: 'Testáe1',
        tags: 'Nông sản',
        author: 'Kha',
        date: '12/06/2019'
    }, {
        id: '2',
        titleBV: 'Tetitle2',
        tags: 'Nôngsản2',
        author: 'Khá',
        date: '12/060192'
    }, {
        id: '3',
        titleBV: 'Teitle3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/019'
    }];
    res.render('Admin/admin',
        {
            layout: 'subLayout',
            displayDetail: 'false',
            displayDashboard: 'true',
            tagAdmin: 'BaiViet',
            BaiVietDaDuyet: baiVietDaPheDuyet,
            BaiVietLoaiBo: baiVietLoaiBo,
            BaiVietChuaDuyet: baiVietChuaPheDuyet,
            TableName: 'Tag bài viết'
        });
});
router.post('/baiviet', function (req, res, next) {
    console.log(req.body);

    if (req.body.action === "remove") { //remove mot bai viet trong bai da duyet va chuyen qua bài viết đã loại bỏ
        //xử lý ở đây, chủ yếu đổi trạng thái nó lại thành đã loại bỏ
    } else if (req.body.action === "approve") {
        //xử lý ở đây, chủ yếu đổi trạng thái nó lại thành đã phê duyệt để chuyển nó lên bảng 1
    } else if (req.body.action === "recover") {
        //xử lý ở đây, chủ yếu đổi trạng thái nó lại thành đã phê duyệt để chuyển nó lên bảng 1
    }
    res.redirect('http://localhost:8000/admin/baiviet');
});

router.get('/nguoidung', function (req, res, next) {
    var user = [{
        Name: 'Khánh',
        Sex: 'Nam',
        Date: '320125',
        Role: 'user',
        Id: 1
    }, {
        Name: 'Khánh1',
        Sex: 'Nam',
        Date: '320125',
        Role: 'user',
        Id: 2
    }
        , {
        Name: 'Khánh2',
        Sex: 'Nam',
        Date: '320125',
        Role: 'user',
        Id: 3
    }
        , {
        Name: 'Khánh3',
        Sex: 'Nam',
        Date: '320125',
        Role: 'user',
        Id: 4
    }];
    res.render('Admin/admin',
        {
            layout: 'subLayout',
            displayDetail: 'false',
            displayDashboard: 'true',
            tagAdmin: 'Users',
            Users: user,
            TableName: 'Quản lý người dùng'
        });
});
router.post('/nguoidung', function (req, res, next) {
    console.log(req.body);
    if (req.body.action === "lock") {
        //khóa account
    } else if (req.body.action === "delete") {
        //xóa
    }
    res.redirect('http://localhost:8000/admin/nguoidung');
});

module.exports = router;