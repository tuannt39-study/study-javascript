"use strict"

// 32

console.log('Video 32');
var x32 = document.querySelectorAll('.n2');
x32[0].classList.remove('btn-primary');
x32[0].classList.remove('btn');
x32[0].classList.add('btn-block');
x32[0].classList.add('btn-warning');
x32[0].classList.add('btn');

var y32 = document.querySelectorAll('.n3');
y32[0].classList.toggle('btn-block');
