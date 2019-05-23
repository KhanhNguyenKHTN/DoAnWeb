var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    // get bai dang by id: id lấy ra từ: req.params.id
    var BaiDang = {
      id: 1,
      tieu_de: "Giá cao su xuất khẩu vẫn ở mức thấp ",
      hinh_anh: "assets/img/cao-su.png",
      tags:"Kinh doanh@Nông sản", //cách nhau bởi dấu @
      ngay_dang: "2019-04-10",
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
    var BaiVietLienQuan = [
        {
          id: 1,
          tieu_de: "Giá cao su xuất khẩu vẫn ở mức thấp ",
          hinh_anh: "assets/img/cao-su.png",
          tags:"Nông sản",
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
        tags:"Nông sản",
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
        tags:"Nông sản",
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
        tags:"Nông sản",
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
      tags:"Nông sản",
      ngay_dang: "2019-01-08",
      noi_dung_tom_tat: `Cà phê là mặt hàng nông sản chủ lực, mang về ngoại tệ lớn cho tỉnh,
      nhưng lượng cà phê chế biến sâu vẫn còn khiêm tốn. Với những lợi thế sẵn
      có thì việc thúc đẩy công nghiệp chế biến sẽ nâng cao giá trị, khẳng định
      vị thế cho mặt hàng này`
    }
      ];
    res.render('baiviet/bai-viet-chi-tiet',
    { 
        Page: "BaiVietChiTiet",
        tpBV: BaiViet,
        BVLQ: BaiVietLienQuan,
        BD: BaiDang,
        tagBD: tags
    });
});
  
module.exports = router;