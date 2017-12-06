"use strict"

// 25

console.log('Video 25');

var mangdl = [
    {
        id: 1,
        anh: 'https://i-vnexpress.vnecdn.net/2017/12/04/tien-giang-8820-1512375685.jpg',
        ten: 'Tỉnh Tiền Giang nhận trách nhiệm vụ trạm BOT Cai Lậy',
        noidungcm: 'Về quan điểm của tỉnh ủng hộ hay phản đối việc di dời trạm, ông Tuấn cho biết chưa thể trả lời được, phải chờ Chính phủ họp'
    },
    {
        id: 2,
        anh: 'https://i-vnexpress.vnecdn.net/2017/12/04/lu-Binh-Dinh-6664-1512373145.jpg',
        ten: 'Hàng nghìn nhà dân ngập do mưa lũ, một người mất tích',
        noidungcm: 'Theo Ban chỉ huy phòng chống thiên tai Bình Định, toàn tỉnh có gần 4.000 hộ dân vùng trũng thấp bị ngập lụt. Hiện, lũ ở tất cả sông trong tỉnh dâng cao'
    },
    {
        id: 3,
        anh: 'https://i-vnexpress.vnecdn.net/2017/12/04/1-JPG-9118-1501145252-4558-1512367096.jpg',
        ten: 'Thái Nguyên đề nghị dỡ bỏ trạm thu phí BOT Bờ Đậu',
        noidungcm: 'Lãnh đạo tỉnh cho hay, người dân Thái Nguyên và các huyện Phú Lương, Định Hóa, Đại Từ, Đồng Hỷ, Sông Công, Phổ Yên cũng như các tỉnh Tuyên Quang, Hà Giang, Bắc Kạn, Cao Bằng, Lạng Sơn'
    }
]

// console.log(mangdl[0]['noidungcm']);

for (var i = 0; i<mangdl.length; i++){
    // console.log(mangdl[i].ten);

    var noidung1khoi = `
        <div class="kcm" id="kcm-${mangdl[i].id}">
            <img src="${mangdl[i].anh}" alt="" />
            <b>${mangdl[i].ten}</b> <span> ${mangdl[i].noidungcm} </span>
        </div>
    `;
    
    console.log(noidung1khoi);

}

// 26

console.log('Video 26');

var x1 = document.getElementsByTagName('h1');
console.log(x1);
var x2 = document.getElementsByTagName('h2');
console.log(x2);
console.log(x2[0]);

var ph = document.getElementsByTagName('p, h2');
console.log(ph);
var p1 = document.getElementsByTagName('p');
console.log(p1);
console.log(p1[1].innerHTML);
p1[1].innerHTML = 'Web da bi hack';
