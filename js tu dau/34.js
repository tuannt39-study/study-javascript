"use strict"

// 34

console.log('Video 34');

document.addEventListener('DOMContentLoaded', function(){

    var nut = document.getElementById('nut1');
    var khoi = document.getElementsByClassName('card');
    nut.onclick = function(){
        khoi[1].classList.toggle('diphai');
    }
}, false)
