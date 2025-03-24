function hitung(op) {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);

    if (isNaN(a) || isNaN(b)) return alert("Masukkan angka valid");

    if (op === '/' && b === 0) return alert("Tidak bisa dibagi 0");

    let hasil = eval(`${a} ${op} ${b}`);
    document.getElementById('hasil').innerText = hasil;
}
