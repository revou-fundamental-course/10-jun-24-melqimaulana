const container = document.getElementById('container');
const reverse1 = document.getElementById('reverse1');
const reverse2 = document.getElementById('reverse2');

reverse1.addEventListener('click', () => {
    container.classList.add("active");
    document.getElementById('inputSuhuC').value = '';
    document.getElementById('hasilC').value = '';
    document.getElementById('rumusC').value = '';
});

reverse2.addEventListener('click', () => {
    container.classList.remove("active");
    document.getElementById('inputSuhuC').value = '';
    document.getElementById('hasilC').value = '';
    document.getElementById('rumusC').value = '';
});



function konversiF() {
    const inputSuhu = document.getElementById('inputSuhuF').value;
    if (inputSuhu === "") {
        alert("Mohon masukkan suhu terlebih dahulu");
        return;
    }
    const hasilKonversi = (inputSuhu - 32) * 5 / 9;
    const rumus = `(${inputSuhu} °F - 32) * 5/9 = ${hasilKonversi} °C`;
    console.log(hasilKonversi);
    document.getElementById('hasilF').value = hasilKonversi;
    document.getElementById('rumusF').value = rumus;
}

function resetF() {
    document.getElementById('inputSuhuF').value = '';
    document.getElementById('hasilF').value = '';
    document.getElementById('rumusF').value = '';
}

function konversiC() {
    const inputSuhu = document.getElementById('inputSuhuC').value;
    if (inputSuhu === "") {
        alert("Mohon masukkan suhu terlebih dahulu");
        return;
    }
    const hasilKonversi = (inputSuhu * 9 / 5) + 32;
    const rumus = `${inputSuhu} °C * 9/5 + 32 = ${hasilKonversi} °F`;
    console.log(hasilKonversi);
    document.getElementById('hasilC').value = hasilKonversi;
    document.getElementById('rumusC').value = rumus;
}

function resetC() {
    document.getElementById('inputSuhuC').value = '';
    document.getElementById('hasilC').value = '';
    document.getElementById('rumusC').value = '';
}
