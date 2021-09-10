function chuyenDoi() {
    let giatrivao = document.getElementById('dauvao').value;
    let giatrimot = document.getElementById('mot').value;
    let giatrihai = document.getElementById('hai').value;
    if (giatrimot == giatrihai){
        document.getElementById('ketqua').innerHTML =  'result =' + giatrivao
    }
    if (giatrimot == 'a' && giatrihai == 'b'){
        document.getElementById('ketqua').innerHTML =  'result =' + giatrivao/24000
    }
    if (giatrimot == 'b' && giatrihai == 'a'){
        document.getElementById('ketqua').innerHTML = 'result ='+ giatrivao*24000
    }

}