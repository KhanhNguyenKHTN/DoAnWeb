var express = require('express'),
  baiVietRepository = require('../repositories/BaiVietRepository'),
  baiDangRepository = require('../repositories/BaiDangRepository');
var router = express.Router();


// router.get('/', function (req, res, next) {
//   var BaiDang = [];
//   // get toan bo bai dang len mang BaiDang
//   baiDangRepository.getAllBaiDang.then(data => {
//     if (data.length > 0) {
//       for (var i in data) {
//         BaiDang.push(data[i]);
//         console.log(data[i]);
//       }
//     }
//   });
// });

function DataInit() {
    // get bai dang by id: id lấy ra từ: req.params.id
    BaiDang = [];
    var id = req.params.id;
    baiDangRepository.getBaiDangById(id).then(data => {
      if (data.length > 0) {
        var BaiDang = data[0];
      }
    });

    var BaiDang = {
      id: 1,
      tieu_de: "Giá cao su xuất khẩu vẫn ở mức thấp ",
      hinh_anh: "assets/img/cao-su.png",
      tags: "Kinh doanh@Nông sản", //cách nhau bởi dấu @
      ngay_dang: "2019-04-10",
      tac_gia: "Khánh đẹp trai",
      noi_dung_tom_tat: `Theo báo cáo của Trung tâm tin học & Thống kê Bộ NN&PTNT, khối lượng xuất khẩu cao
    su tháng 2 năm 2019
    của Việt nam ước đạt 71 nghìn tấn với giá trị đạt 93 triệu USD. Với ước tính này,
    khối lượng xuất khẩu
    cao su 2 tháng đầu năm 2019 đạt 228 nghìn tấn và 293 triệu USD, tăng 22,4% về khối
    lượng và tăng 6,8% về
    giá trị so với cùng kỳ năm 2018.`
    };
    // lấy tags cho bài viết
    var tags = BaiDang.tags.split("@"); //cắt dấu @ để lấy đc list tag của bài đăng

    /* Trong bai dang co list bai viet roi. cham de goi ra thoi */
    var BaiViet = [];
    // var id = req.params.id;
    baiVietRepository.getBaiVietById(id).then(data => {
      if (data.length > 0) {
        for (var i in data) {
          BaiViet.push(data[i]);
        }
      }
    });

    // get list bai viet(thành phần của bài đăng)
    // type: bao gồm. image, strong, text
    var BaiViet = [
      {
        type: "image",
        noi_dung_bai_viet: "assets/img/cao-su.png"
      },
      {
        type: "strong",
        noi_dung_bai_viet: "Xuất khẩu cao su Việt Nam đạt 71 nghìn tấn, giá trị đạt 93 triệu USD"
      },
      {
        type: "text",
        noi_dung_bai_viet: "Theo báo cáo của Trung tâm tin học & Thống kê Bộ NN&PTNT, khối lượng xuất khẩu cao su tháng 2 năm 2019 của Việt nam ước đạt 71 nghìn tấn với giá trị đạt 93 triệu USD. Với ước tính này, khối lượng xuất khẩu cao su 2 tháng đầu năm 2019 đạt 228 nghìn tấn và 293 triệu USD, tăng 22,4% về khối lượng và tăng 6,8% về giá trị so với cùng kỳ năm 2018."
      },
      {
        type: "text",
        noi_dung_bai_viet: "Giá cao su xuất khẩu bình quân tháng 1 năm 2019 đạt 1.271 USD/tấn, giảm 13,1% so với cùng kỳ năm 2018. Trung Quốc, Ấn Độ, và Hàn Quốc là 3 thị trường tiêu thụ cao su lớn nhất của Việt Nam trong tháng 1 năm 2019, chiếm thị phần lần lượt là 65,6%, 8,9% và 3,1%."
      },
      {
        type: "text",
        noi_dung_bai_viet: "Thị trường cao su nguyên liệu trong nước trầm lắng trước và sau Tết Nguyên đán. Giá mủ cao su Bình Phước tháng 2/2019 giữ ở mức 255 đồng/độ. Tại Đồng Nai, mủ cao su dạng nước vẫn giữ ở mức 12.000 đồng/kg. Đầu năm 2019, xuất khẩu cao su của Việt Nam sang các nước đạt 157,15 nghìn tấn, ứng với 199,78 triệu USD, tăng 16 % về lượng và 0,8% về giá trị."
      },
      {
        type: "text",
        noi_dung_bai_viet: "Dự báo trong năm nay, mức tăng trưởng tiêu thụ cao su thiên nhiên của toàn cầu sẽ chậm lại, ở mức 2,5%/năm, thêm nữa bất cứ động thái nào của Mỹ áp thuế lên ô tô và phụ tùng ô tô từ Trung Quốc đều có thể ảnh hưởng tiêu cực tới nhu cầu cao su tự nhiên, đây cũng là nước nhập khẩu cao su lớn nhất của Việt Nam. Trong thời gian tới, doanh nghiệp Việt Nam nên tìm kiếm những thị trường mới, tránh phụ thuộc vào những thị trường lớn như trước đây."
      }

    ];

    // get list bai viet lien quan
    var BaiDang = [];
    baiDangRepository.getAllBaiDang.then(data => {
      if (data.length > 0) {
        for (var i in data) {
          BaiDang.push(data[i]);
        }
      }
    });
    /* list bai dang -> random bai viet lien quan */
    var BaiVietLienQuan = [
      {
        id: 1,
        tieu_de: "Giá cao su xuất khẩu vẫn ở mức thấp ",
        hinh_anh: "assets/img/cao-su.png",
        tags: "Nông sản",
        ngay_dang: "2019-04-10",
        noi_dung_tom_tat: `Theo báo cáo của Trung tâm tin học & Thống kê Bộ NN&PTNT, khối lượng xuất khẩu cao
        su tháng 2 năm 2019
        của Việt nam ước đạt 71 nghìn tấn với giá trị đạt 93 triệu USD. Với ước tính này,
        khối lượng xuất khẩu
        cao su 2 tháng đầu năm 2019 đạt 228 nghìn tấn và 293 triệu USD, tăng 22,4% về khối
        lượng và tăng 6,8% về
        giá trị so với cùng kỳ năm 2018.`
      },
      {
        id: 2,
        tieu_de: "Dak Lak cần nâng cao giá trị hạt cafe",
        hinh_anh: "assets/img/cafe.png",
        tags: "Nông sản",
        ngay_dang: "2019-01-08",
        noi_dung_tom_tat: `Cà phê là mặt hàng nông sản chủ lực, mang về ngoại tệ lớn cho tỉnh,
      nhưng lượng cà phê chế biến sâu vẫn còn khiêm tốn. Với những lợi thế sẵn
      có thì việc thúc đẩy công nghiệp chế biến sẽ nâng cao giá trị, khẳng định
      vị thế cho mặt hàng này`
      },
      {
        id: 3,
        tieu_de: "Dak Lak cần nâng cao giá trị hạt cafe",
        hinh_anh: "assets/img/cafe.png",
        tags: "Nông sản",
        ngay_dang: "2019-01-08",
        noi_dung_tom_tat: `Cà phê là mặt hàng nông sản chủ lực, mang về ngoại tệ lớn cho tỉnh,
      nhưng lượng cà phê chế biến sâu vẫn còn khiêm tốn. Với những lợi thế sẵn
      có thì việc thúc đẩy công nghiệp chế biến sẽ nâng cao giá trị, khẳng định
      vị thế cho mặt hàng này`
      },
      {
        id: 4,
        tieu_de: "Giá cao su xuất khẩu vẫn ở mức thấp ",
        hinh_anh: "assets/img/cao-su.png",
        tags: "Nông sản",
        ngay_dang: "2019-04-10",
        noi_dung_tom_tat: `Theo báo cáo của Trung tâm tin học & Thống kê Bộ NN&PTNT, khối lượng xuất khẩu cao
      su tháng 2 năm 2019
      của Việt nam ước đạt 71 nghìn tấn với giá trị đạt 93 triệu USD. Với ước tính này,
      khối lượng xuất khẩu
      cao su 2 tháng đầu năm 2019 đạt 228 nghìn tấn và 293 triệu USD, tăng 22,4% về khối
      lượng và tăng 6,8% về
      giá trị so với cùng kỳ năm 2018.`
      },
      {
        id: 5,
        tieu_de: "Dak Lak cần nâng cao giá trị hạt cafe",
        hinh_anh: "assets/img/cafe.png",
        tags: "Nông sản",
        ngay_dang: "2019-01-08",
        noi_dung_tom_tat: `Cà phê là mặt hàng nông sản chủ lực, mang về ngoại tệ lớn cho tỉnh,
    nhưng lượng cà phê chế biến sâu vẫn còn khiêm tốn. Với những lợi thế sẵn
    có thì việc thúc đẩy công nghiệp chế biến sẽ nâng cao giá trị, khẳng định
    vị thế cho mặt hàng này`
      }
    ];

    // Phan cmt load cmt by id bai viet
    var cmt = [
      {
        id: 1,
        ten: "Đoàn Khải",
        avatar: "assets/img/cmt-hinh-1.jpg",
        dataTime: "2019-02-10 11:32",
        noi_dung: `Kinh doanh thi có lúc nầy lúc kia, hễ được giá thì đua nhau trồng, mất giá thì lăm lăm
      chặt bỏ,
      làm kiểu chạy theo bóng như vậy sao mà làm được.`,
        so_cmt_con: 0,
        rep_cmt: [], // trả lời cmt(cmt con) các cmt con đc liên kết nhiều - 1 vs cmt cha
      }, {
        id: 2,
        ten: "Lê Văn Hưng",
        avatar: "assets/img/cmt-hinh-2.jpg",
        dataTime: "2019-02-08 10:42",
        noi_dung: `Cần xem lại chính sách tỉ giá. Do chính sách hiện tại giá các mặt hàng nông thuỷ hải sản
      của VN đắt lên 20-30% so vói các đối thủ cạnh tranh trong một năm qua
      . Tuy nông nghiệp chỉ đóng góp phần ít trong GDP, nhưng 70% dân số ...`,
        so_cmt_con: 2,
        rep_cmt: [
          {
            id: 3,
            id_cmt_cha: 2,
            ten: "Khánh Nguyễn",
            avatar: "assets/img/cmt-hinh-3.jpg",
            dataTime: "2019-02-08 10:45",
            noi_dung: `Người hàn quốc người nhật sản xuất một chiếc xe hơi đóng một con tàu bằng cả
          huyện ơ việt nam trồng lúa cả năm`
          },
          {
            id: 4,
            id_cmt_cha: 2,
            ten: "Nguyễn Khánh Hòa",
            avatar: "assets/img/cmt-hinh-4.jpg",
            dataTime: "2019-02-08 11:00",
            noi_dung: `Bạn biết Israel không? Họ giàu nhờ nông nghiệp đấy.
          Nếu bạn có chính sách cho nông nghiệp hợp lý, hiện đại hóa ngành nông nghiệp,
          bạn vẫn có thể giàu.`
          }
        ], // trả lời cmt(cmt con) các cmt con đc liên kết nhiều - 1 vs cmt cha
      }
    ];
    return {
      Page: "BaiVietChiTiet",
      tpBV: BaiViet,
      BVLQ: BaiVietLienQuan,
      BD: BaiDang,
      tagBD: tags,
      Comment: cmt
    };
  }
var data = DataInit();
router.get('/:id', function (req, res, next) {
  res.render('baiviet/bai-viet-chi-tiet', data);
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