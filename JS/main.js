// function reverse start
const container = document.getElementById('container');
const celcius = document.getElementById('celcius');
const farenhit = document.getElementById('farenhit');

celcius.addEventListener('click', () => {
    container.classList.add("active");
    document.getElementById('inputSuhuC').value = '';
    document.getElementById('hasilC').value = '';
    document.getElementById('rumusC').value = '';
});

farenhit.addEventListener('click', () => {
    container.classList.remove("active");
    document.getElementById('inputSuhuC').value = '';
    document.getElementById('hasilC').value = '';
    document.getElementById('rumusC').value = '';
});
// function reverse start

document.addEventListener('DOMContentLoaded', () => {
    const inputSuhuF = document.getElementById('inputSuhuF');
    const inputSuhuC = document.getElementById('inputSuhuC');

    inputSuhuF.addEventListener('input', validateNumber);
    inputSuhuC.addEventListener('input', validateNumber);

    function validateNumber(event) {
        const input = event.target;
        input.value = input.value.replace(/[^0-9]/g, '');
    }
});


// function konversi farenhit start
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
// function konversi farenhit end

// function reset farenhit start
function resetF() {
    document.getElementById('inputSuhuF').value = '';
    document.getElementById('hasilF').value = '';
    document.getElementById('rumusF').value = '';
}
// function reset farenhit end

// function konversi celcius start
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
// function konversi celcius end

// function reset celcius start
function resetC() {
    document.getElementById('inputSuhuC').value = '';
    document.getElementById('hasilC').value = '';
    document.getElementById('rumusC').value = '';
}
// function reset celcius end