var express = require('express');
var router = express.Router();

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
            TableName: 'Bài viết đã xuất bản'
        });
});
router.get('/bituchoi', function (req, res, next) {
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
            TableName: 'Bài viết bị từ chối'
        });
});
router.get('/chuaduocduyet', function (req, res, next) {
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

module.exports = router;
