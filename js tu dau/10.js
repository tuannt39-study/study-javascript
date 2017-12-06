"use strict"

// 10

console.log('Video 10');

var dongho = {
    hangsx: 'casio',
    mau: 'den',
    gia: 500000000,
    gioitinh: 'name',
    xemngay: function(){
        if (this.mau == 'den') {
            return 'mau den';
        }
    }
}

console.log(dongho.hangsx);
console.log(dongho.mau);
console.log(dongho.gia);
console.log(dongho.gioitinh);
console.log(dongho.xemngay());

// 11

console.log('Video 11');

var hocvien = {
    ten: 'Tuan',
    ho: 'Nguyen',
    tuoi: 22,
    chieucao: 170,
    cannang: 60,
    tendaydu: function(){
        return this.ho + ' ' + this.ten;
    },
    danhgia: function(){
        if (this.chieucao/this.cannang < 3) {
            return 'chuan';
        } else {
            return 'chua chuan';
        }
    }
}
console.log(hocvien.tendaydu());
console.log('Tuoi cua hoc vien la: ');
console.log(hocvien.tuoi);
console.log('Danh gia so bo: ');
console.log(hocvien.danhgia());

// 13

console.log('Video 13');

var sv = ['viet', 'nam', 'huong', 'lan'];
console.log('In ra vong lap: ');
console.log(sv[2]);

console.log('In ra vong lap 2: ');
for(var i=0; i<sv.length; i++){
    console.log(sv[i]);
}

// 14

console.log('Video 14');

var hocvien14 = {
    ten: 'Tuan',
    ho: 'Nguyen',
    tuoi: 22,
    chieucao: 170,
    cannang: 60
}

console.log('In ra vong lap 3: ');
var x;
for (x in hocvien14){
    console.log(hocvien14[x])
}

// 15 - Sử dụng "use trick"

console.log('Video 15');

// aa=10;
var aa=10;
console.log(aa);

// 16

console.log('Video 16');

var x16 = 'Dien thoai, iphone, android, nokia';
console.log(x16.length);

var vitri = x16.indexOf('iphone');
if(vitri != -1){
    console.log('Tim thay');
} else {
    console.log('Khong thay');
}

var vitri = x16.search('android');
if(vitri != -1){
    console.log('Tim thay');
    var moi = x16.replace('android', 'bphone');
    console.log(moi);
} else {
    console.log('Khong thay');
}

console.log('In mang');

var mang = x16.split(',');
console.log(mang[0]);

for (var i=0; i<mang.length; i++ ){
    console.log(mang[i]);
}

// 17

console.log('Video 17');

var so1 = 10;
var so2 = 7;
so2 = so2.toString();
console.log(so1 + so2);

var chu1 = "10";
var chu2 = "7";
console.log(chu1 + 20);
console.log(chu1 + chu2 + so1);

// 21

console.log('Video 21');

// anonymous
var z = function(x, y){
    return (x+y)/2;
}
console.log(z(2,4));

// closure function
function chao(){
    var ten = 'tuan';
    return function(){
        console.log('Cafe khong em ' + ten);
    }
    ten = ten + " - dep trai";
}
var h = chao();
h();

// 22 - Constructor

console.log('Video 22');

var cacmonan = {
    ten: 'Thit',
    nguyenlieu: 'thit heo',
    gia: 500
};
console.log(cacmonan);

function MonAn(t, nl, g){
    this.ten = t;
    this.nguyenlieu = nl;
    this.gia = g;
}

var mon1 = new MonAn('Rau xao', 'Rau muong', 900);
var mon2 = new MonAn('Dau sot ca chua', 'dau phu', 100);
console.log(mon1);
console.log(mon2);
