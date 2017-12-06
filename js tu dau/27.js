"use strict"

// 27

console.log('Video 27');

var cactieude = document.getElementsByTagName('h3');
console.log(cactieude);


// cactieude[2].innerHTML = '<button class="btn btn-info btn-block"> Tuan Hehe </button>';

// for (var i = 0; i < cactieude.length; i++){
//     cactieude[i].innerHTML = '<button class="btn btn-info btn-block"> Tuan Hehe </button>';
// }

for (var i = 0; i < cactieude.length; i++){
    if (i==2){
        cactieude[i].innerHTML = '<button class="btn btn-info btn-block"> Tuan Hehe </button>';        
    }
}

// 28

console.log('Video 28');

var x1 = document.getElementById('tieude');
var x2 = document.getElementById('text');
console.log(x1);
console.log(x2);

// 29

console.log('Video 29');

var xcl = document.getElementsByClassName('card-text');
for (var i=0; i<xcl.length; i++){
    xcl[i].innerHTML = 'Text Hello nhe';
}
console.log(xcl);

var ycl = document.getElementsByClassName('card-title');
for (var i=0; i<ycl.length; i++){
    ycl[i].innerHTML = 'Title Hello nhe';
}
console.log(ycl);

// 30

console.log('Video 30');

var x29 = document.querySelector('.list-group-item')
console.log(x29);

var y29 = document.querySelector('.list-group')
console.log(y29);

// 31

console.log('Video 31');

var a31 = document.querySelectorAll('.media-heading')
console.log(a31);

for (var i=0; i<a31.length; i++){
    if (i==1){
        console.log('Phan tu 66');
        console.log(a31[i]);
        a31[i].innerHTML = 'Phan tu duoc chon';
    }
    
}

var b31 = document.querySelectorAll('#nd')
console.log(b31[0]);

var c31 = document.querySelectorAll('[data-thongbao]')
console.log(c31[0]);
