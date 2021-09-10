function cong() {
    let a = +document.getElementById('mot').value;
    let b = +document.getElementById('hai').value;
    let tong = (a + b)
    alert('ket qua ='+ tong)

}
function tru() {
    let a = document.getElementById('mot').value;
    let b = document.getElementById('hai').value;
    let tong = (a - b)
    alert('ketqua ' + tong)

}

function nhan() {
    let a = +document.getElementById('mot').value;
    let b = +document.getElementById('hai').value;
    let tong = (a * b)
    alert('ket qua ='+ tong)

}
function chia() {
    let a = document.getElementById('mot').value;
    let b = document.getElementById('hai').value;
    let tong = ( a / b)
    alert('ketqua' + tong)

}