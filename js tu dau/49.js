// 49

console.log('Video 49');

document.addEventListener('DOMContentLoaded', function(){ 
    var nut = document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName('dehienthi');
    for (var i=0; i<nut.length; i++){
        nut[i].onclick = function(){
            if(this.classList[1]=='mautrang'){ // click vao cai da hien thi roi
                this.classList.remove('mautrang'); // bo mau trang o chinh no
                var ndhienra = this.getAttribute('data-hienlen'); // 3 dong cuoi la cho div cua doi tuong duoc click an di
                var pthr = document.getElementById(ndhienra);
                pthr.classList.remove('ra');
            } else{ // click vao cac cai con lai
                for (var k=0; k<nut.length; k++){ // cho tat ca bo mau trang di
                    nut[k].classList.remove('mautrang');
                }
                this.classList.toggle('mautrang'); // doi tuong duoc click (this) thanh mau trang
                var ndhienra = this.getAttribute('data-hienlen'); // lay ve cai data-hienlen
                var pthr = document.getElementById(ndhienra);
                for (var i=0; i<nd.length; i++){ // cho tat ca cac div .dehienthi khac an di
                    nd[i].classList.remove('ra');
                }
                pthr.classList.toggle('ra'); // cho div cua doi tuong duoc click hien thi ra
            }
        }
    }

}, false)