const inputBox = document.createElement('input');
inputBox.type = 'text';
document.body.appendChild(inputBox);

const gomb = document.createElement('button');
gomb.textContent = 'Küldés'
document.body.appendChild(gomb);

gomb.addEventListener('click', function(e) {
    e.preventDefault();

    // a

    let nevLength = inputBox.value.length;

    for (let i = 0;i < inputBox.value.length; i++) {
        if (inputBox.value[i] == " "){
            nevLength--;
        }
    }

    console.log(nevLength);


    // b

    let vanEBetu = false
    for (let i = 0;i < inputBox.value.length; i++) {
        if (inputBox.value[i] == 'E' || inputBox.value[i] == 'e')
            vanEBetu = true;
    }

    console.log(vanEBetu ? "Van e betű a névben" : "Nincs e betű a névben")


    // c

    let aCount = 0;
    for (let i = 0;i < inputBox.value.length; i++) {
        if (inputBox.value[i] == 'A' || inputBox.value[i] == 'a')
            aCount++;
    }

    console.log(`a betűk száma: ${aCount}`)


    // d

    const splitteltNev = inputBox.value.split(" ");
    console.log(`Keresztnév: ${splitteltNev[splitteltNev.length - 1]}`)


    // e

    let reverseNev = inputBox.value.split("").reverse().join("");
    console.log(`A név visszafele: ${reverseNev}`);


    // f

    let vanSzam = /\d/;
    let result = vanSzam.test(inputBox.value);
    

    console.log(result ? "A névben van szám." : "A névben nincs szám.")
})