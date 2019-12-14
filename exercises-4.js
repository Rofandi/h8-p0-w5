function totalDigitRekursif(angka) {
    if(angka.toString().length === 1)
    {
        return angka;
    }
    return parseInt(angka.toString()[0]) + totalDigitRekursif(parseInt(angka.toString().slice(1)));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5