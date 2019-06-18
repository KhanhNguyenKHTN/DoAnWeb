var express = require('express');
var  repBaiDang = require('../repositories/BaiDangRepository');
var repBaiViet = require('../repositories/BaiVietRepository');
var repUser = require('../repositories/NguoiDungRepository');
var router = express.Router();




router.get('/:id', function (req, res, next) {
  var BaiDang = {
    data: {},
    tac_gia: ''
  };
  var BaiViet = [];
  var BaiVIetLQ = [];
  repBaiDang.getBaiDangById(req.params.id).then((data)=>{
    BaiDang.data = data[0];
    repBaiViet.getListBaiViet(BaiDang.data.id).then((listBaiViet)=>{
      BaiViet = listBaiViet;
      repBaiDang.getReference(BaiDang.data.chuyen_muc_id).then((listRef)=>{
        for (var i = listRef.length-1; i >= listRef.length-6;i--){
          BaiVIetLQ.push(listRef[i]);
        }
        //get cmt
        repUser.GetUserById(BaiDang.data.nguoi_dung_id).then((user)=>{
          BaiDang.tac_gia = user[0].ten_nguoi_dung;
          res.render('baiviet/bai-viet-chi-tiet', {
            Page: "BaiVietChiTiet",
            tpBV: BaiViet,
            BVLQ: BaiVIetLQ,
            BD: BaiDang,
            tagBD: [],
            Comment: []
          });
        });
        
      });
    });
  });
 
});


router.post('/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  var val = req.body;
  // comment lon
  if (val.ParentCommentID == "underfine") {
    data.Comment.push({
      id: 6,
      ten: "Đoàn Khải",
      avatar: "assets/img/cmt-hinh-4.jpg",
      dataTime: "2019-02-10 11:32",
      noi_dung: val.comment,
      so_cmt_con: 0,
      rep_cmt: [],
    });
  } else { // rep cmt
    data.Comment.forEach(element => {
      if (element.id == val.ParentCommentID) { // timf commet cha
        // thay thi them cmt con vao, push vao data base nhe
        element.rep_cmt.push({
          id: 10,
          avatar: "assets/img/cmt-hinh-4.jpg",
          dataTime: "2019-02-08",
          noi_dung: val.comment
        });
        element.so_cmt_con = element.rep_cmt.length;
      }
    });
  }
  res.redirect("/bai-viet-chi-tiet/" + req.params.id);
});


module.exports = router;