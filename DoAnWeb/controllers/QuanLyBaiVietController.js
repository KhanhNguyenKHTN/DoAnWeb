var express = require('express');
var router = express.Router();
var repDM = require('../repositories/ChuyenMucRepository');
var repBD = require('../repositories/BaiDangRepository');
var repBV = require('../repositories/BaiVietRepository');

router.get('/tatcabaiviet', function (req, res, next) {
    //nhớ check role phong vien hoac bien tap vien
    //lấy id từ seasion= req.seasion.CurUser.Id;
    //Lấy tất cả bài viết theo Id đó.
    //đổ thông tin vào bải bài viết.
    // <td class="column100 column1" data-column="column1">titleBV</td>
    //                         <td class="column100 column2" data-column="column2">tags</td>
    //                         <td class="column100 column3" data-column="column3">author</td>
    //                         <td class="column100 column4" data-column="column4">date</td>
    //                         <td class="column100 column5" data-column="column5">
    //                             <a> Edit </a>
    //                             |
    //                             <a> Details </a>
    //                             |
    //                             <a onclick="onRowClickDelete('{{id}}')"> Delete </a>
    //                         </td>
    var baiViet = [{
        id: '1',
        titleBV: 'Test title1',
        tags: 'Nông sản',
        author: 'Khánh',
        date: '12/06/2019'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    }];
    res.render('QuanLyBaiViet/QuanLyBaiViet',
        {
            layout: 'subLayout',
            displayDetail: 'true',
            BaiViet: baiViet,
            TableName: 'Quản lý bài viết của bạn'
        });
});

//lay bai viet theo trang thai cua no
router.get('/baivietdaduyet', function (req, res, next) {
    //lấy id từ seasion= req.seasion.CurUser.Id;
    //@@@@Lấy tất cả bài viết theo Id đó vowis trang thai da phe duyet.
    //đổ thông tin vào bải bài viết.
    // <td class="column100 column1" data-column="column1">titleBV</td>
    //                         <td class="column100 column2" data-column="column2">tags</td>
    //                         <td class="column100 column3" data-column="column3">author</td>
    //                         <td class="column100 column4" data-column="column4">date</td>
    //                         <td class="column100 column5" data-column="column5">
    //                             <a> Edit </a>
    //                             |
    //                             <a> Details </a>
    //                             |
    //                             <a onclick="onRowClickDelete('{{id}}')"> Delete </a>
    //                         </td>
    var baiViet = [{
        id: '1',
        titleBV: 'Test title1',
        tags: 'Nông sản',
        author: 'Khánh',
        date: '12/06/2019'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    }];
    res.render('QuanLyBaiViet/QuanLyBaiViet',
        {
            layout: 'subLayout',
            displayDetail: 'true',
            BaiViet: baiViet,
            TableName: 'Bài viết đã được phê duyệt'
        });
});
router.get('/daxuatban', function (req, res, next) {
    var baiViet = [{
        id: '1',
        titleBV: 'Test title1',
        tags: 'Nông sản',
        author: 'Khánh',
        date: '12/06/2019'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    }];
    res.render('QuanLyBaiViet/QuanLyBaiViet',
        {
            layout: 'subLayout',
            displayDetail: 'true',
            BaiViet: baiViet,
            TableName: 'Bài viết đã xuất bản'
        });
});
router.get('/bituchoi', function (req, res, next) {
    //lấy id từ seasion= req.seasion.CurUser.Id;
    //Lấy tất cả bài viết theo Id đó.
    //đổ thông tin vào bải bài viết.
    var baiViet = [{
        id: '1',
        titleBV: 'Test title1',
        tags: 'Nông sản',
        author: 'Khánh',
        date: '12/06/2019'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    }];
    res.render('QuanLyBaiViet/QuanLyBaiViet',
        {
            layout: 'subLayout',
            displayDetail: 'true',
            BaiViet: baiViet,
            TableName: 'Bài viết bị từ chối'
        });
});
router.get('/chuaduocduyet', function (req, res, next) {
    //lấy id từ seasion= req.seasion.CurUser.Id;
    //Lấy tất cả bài viết theo Id đó.
    //đổ thông tin vào bải bài viết.
    var baiViet = [{
        id: '1',
        titleBV: 'Test title1',
        tags: 'Nông sản',
        author: 'Khánh',
        date: '12/06/2019'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    }
    ,{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    },{
        id: '2',
        titleBV: 'Test title2',
        tags: 'Nông sản2',
        author: 'Khánh',
        date: '12/06/20192'
    },{
        id: '3',
        titleBV: 'Test title3',
        tags: 'Nông sản3',
        author: 'Khánh',
        date: '12/06/2019'
    }];
    res.render('QuanLyBaiViet/QuanLyBaiViet',
        {
            layout: 'subLayout',
            displayDetail: 'true',
            BaiViet: baiViet,
            TableName: 'Bài viết chưa được duyệt'
        });
});
router.get('/them-bai-viet', function (req, res, next) {
    
    repDM.getListChuyenMuc().then((data)=> {
        res.render('baiviet/them-bai-viet',
        {
            layout: 'subLayout',
            displayDetail: 'true',
            DanhMuc: data
        });
    });
});
router.post('/them-bai-viet', function (req, res, next) {
    console.log(req.body);
    req.check('content','Nội dung không được để trống').notEmpty();
    req.check('noi_dung_tom_tat','Nội dung tóm tắt không được để trống').notEmpty();
    req.check('tieu_de','Tiêu đề không được để trống').notEmpty();
    req.check('hinh_anh','Hình ảnh không được để trống').notEmpty();
    req.check('danh_muc_id','Danh mục không được để trống').notEmpty();
    
    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        repDM.getListChuyenMuc().then((data)=> {
            res.render('baiviet/them-bai-viet',
            {
                layout: 'subLayout',
                displayDetail: 'true', success: false, errors: errors,
                DanhMuc: data
            });
        });
     } else {
        var content = req.body.content;
        var text = [];
        var temp = {
            tag: '',
            value: ''
        };
        for(var i = 0; i< content.length; i++){
            if(content[i] != '>') {
                temp.value += content[i];
            } else
            {
                if (temp.value === '<br'){
                    temp.value = '';
                    continue;
                }
                if(temp.value.indexOf(`style="font-size:`) != -1)
                {
                    temp.value += content[i];
                    temp.value = temp.value.replace(`style="font-size: `, `font;`);
                    continue;
                }
                if(temp.value != '<div') {
                    if(temp.value === '<div>\r\n    </div'){
                        temp.value = '';
                        continue;
                    } else {
                        if (temp.value.indexOf('div') != -1) {
                            if(temp.value.indexOf(`font;`)!= -1) {
                                temp.tag = 'strong';
                            } else {
                                temp.tag = 'text';
                            }
                            temp.value = temp.value.slice(temp.value.indexOf(`>`) + 1, temp.value.length);
                            temp.value = temp.value.replace('</div', '');
                        }
                        if (temp.value.indexOf('img') != -1) {
                            temp.tag = 'img';
                            var index = temp.value.indexOf(`src="`);
                            temp.value = temp.value.replace(`src="`, '');
                            temp.value = temp.value.slice(index, temp.value.indexOf(`"`));
                        }
                        text.push({tag: temp.tag, value: temp.value.replace(`\r\n  `,'')});
                        temp.tag = '';
                        temp.value = '';
                    }
                } else {
                    temp.value += content[i];
                }
            }
        }
        //chuyen_muc_id,nguoi_dung_id, tieu_de, ngay_dang, hinh_anh, noi_dung_tom_tat, luot_xem, tinh_trang
        var anh = req.body.hinh_anh;
        var ind = anh.indexOf(`src="`);
        anh = anh.replace(`src="`, '');
        anh = anh.slice(ind, anh.indexOf(`"`));
        console.log(anh);
        var BaiDang = {
            chuyen_muc_id: req.body.danh_muc_id,
            nguoi_dung_id: 2, // sau lấy từ session
            tieu_de: req.body.tieu_de,
            hinh_anh: anh,
            tags: req.body.tag_content,
            noi_dung_tom_tat: req.body.noi_dung_tom_tat,
            luot_xem: 0,
            tinh_trang: "Preview"
        }
        
        repBD.insertBD(BaiDang).then(data=>{
            console.log(data.insertId);
            for (let i = 0; i < text.length; i++) {
                const element = text[i];
                var BaiViet = {};
                if(element.tag === 'img') {
                    BaiViet = {
                        bai_dang_id: data.insertId,
                        noi_dung_bai_viet: element.value,
                        action: 'image'
                    }
                    
                } else if (element.tag === 'strong')
                {
                    BaiViet = {
                        bai_dang_id: data.insertId,
                        noi_dung_bai_viet: element.value,
                        action: 'strong'
                    }
                } else{
                    BaiViet = {
                        bai_dang_id: data.insertId,
                        noi_dung_bai_viet: element.value,
                        action: 'text'
                    }
                }
                repBV.insertBaiViet(BaiViet).then();
            }
            var url = `http://localhost:8000/bai-viet-chi-tiet/` + data.insertId;
            res.redirect(url);
        });
        
    }

});

module.exports = router;
