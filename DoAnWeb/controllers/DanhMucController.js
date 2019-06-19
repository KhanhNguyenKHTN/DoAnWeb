var express = require('express');
var repBaiDang = require('../repositories/BaiDangRepository');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    var baiD = [];
      console.log('homez', req.params.id);
      repBaiDang.GetListByChuyenMuc(req.params.id).then((data)=>{
        console.log("saa");
        console.log(data);
        baiD = data;
        res.render('baiviet/ChuyenMuc', { Page: "DanhMuc", BDNB: baiD, layout: 'layout' });
      });
  
  });

module.exports = router;