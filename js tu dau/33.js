"use strict"

// 33

console.log('Video 33');

document.addEventListener('DOMContentLoaded', function(){
    var x1 = document.getElementById('n3');
    console.log(x1);
    x1.onclick = function(){
        console.log('Ban vua click vao ' + x1);
        x1.classList.add('dixuong');
    }
}, false)

