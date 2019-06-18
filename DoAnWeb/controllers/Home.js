var express = require('express');
var repBaiDang = require('../repositories/BaiDangRepository');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // get list bai viết từ database. Rồi chọn random ngẫu nhiên các bài theo yêu cầu: Nổi bật, Mới, Xem nhiều, Top chuyên mục
  
  var BDNoiBat = [];
  var BDXemNhieuNhat = [];
  var BDMoiNhat = [];
  var BDTopChuyenMuc = [];
  repBaiDang.getLastestBaiViet().then((lastBD)=>{
     BDMoiNhat = lastBD;
     repBaiDang.getTopViewBaiViet().then((topview)=>{
        BDXemNhieuNhat = topview;
        repBaiDang.getTop10ChuyenMuc().then((top10chuyenmuc)=>{
          BDTopChuyenMuc = top10chuyenmuc;
          repBaiDang.getTop3Week().then((top3week)=>{
            BDNoiBat = top3week;
            res.render('index', { Page: "home", BDNB: BDNoiBat, BDXN: BDXemNhieuNhat, BDMN: BDMoiNhat, BDCM: BDTopChuyenMuc,
            BDNBCount: BDNoiBat.length, BDXNCount: BDXemNhieuNhat.length, BDMNCount: BDMoiNhat.length, BDCMCount: BDTopChuyenMuc.length });
          });
        });
     });
     
  });
 
});


module.exports = router;
