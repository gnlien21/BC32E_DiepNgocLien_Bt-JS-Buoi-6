//Bài 1:

document.getElementById('btnSoNhoNhat').onclick = function (){
    var n = 0;
    var sum = 0;
    while (sum <10000){
        sum += n+1;
        n++;
    }
    document.getElementById('ketQua_B1').innerHTML = 'Số nhỏ nhất là: ' + n;
}

//Bài 2:
document.getElementById('btnTinhTong_B2').onclick = function(){
    var n = +document.getElementById('nhapSo_n').value;
    var x = +document.getElementById('nhapSo_x').value;
    var tong = 0;

    var soMu = 1;

    while (soMu <= n) {
        tong += Math.pow(x, soMu);
        soMu++;
    }
    document.getElementById('ketQua_B2').innerHTML = tong;
}

//Bài 3:

document.getElementById('btnTinhGiaiThua').onclick = function () {
    var num = +document.getElementById('nhapSo_B3').value;
    var giaiThua = 1;

    var soGiaiThua = 1;

    while (soGiaiThua <= num){
        giaiThua += giaiThua*soGiaiThua;
        soGiaiThua++;
    }

    document.getElementById('ketQua_B3').innerHTML = giaiThua;
}

//Bài 4: 

document.getElementById('btnInTheDiv').onclick = function() {

    var soHang = 1;
    var content = '';
    while (soHang <= 10) {
        if (soHang % 2 === 0){
            content += '<div class="alert alert-danger">chẵn</div>';
        } else if (soHang % 2 !== 0){
            content += '<div class="alert alert-primary">lẻ</div>';
        }

        soHang++;
    }

    document.getElementById('ketQua_B4').innerHTML = content;
}

//Bài 5: 

document.getElementById('btnInSNT').onclick = function(){
    var number = +document.getElementById('nhapSo_B5').value;
    var stringSNT = '';

    for (var a = 2; a <= number; a++) {
        kiemTra = checkSNT (a);
        if (kiemTra === true){
            stringSNT += a + ' ';
        }
    }

    document.getElementById('ketQua_B5').innerHTML = stringSNT;
}

function checkSNT(so) {
    var kiemTra = true;

    for (var uoc = 2; uoc <= so/2; uoc++){
        if (so % uoc === 0) {
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}


//Bài 6:

document.getElementById('btnChanLe').onclick = function(){
    var soChan = '';
    var soLe = '';

    for (var demSo = 0; demSo <= 100; demSo++){
        if (demSo % 2 === 0){
            soChan += demSo + ' ';
        } else if (demSo % 2 !== 0){
            soLe += demSo + ' ';
        }
    } 

    document.getElementById('ketQua_B6').innerHTML = 'Số chẵn: ' + soChan + '</br> Số lẻ: '+ soLe;
}

//Bài 7: 

document.getElementById('btnChia3').onclick = function() {
    var soBiChia = 0;
    var chiaHet3 = 0;
    while (soBiChia <= 1000){
        if (soBiChia % 3 === 0){
            chiaHet3++;
        }
        soBiChia++;
    }

    document.getElementById('ketQua_B7').innerHTML = 'Số nhỏ hớn 1000 chia hết cho 3 có ' + chiaHet3 + ' số';
}
