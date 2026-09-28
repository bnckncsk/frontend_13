// a

const magassagok = [];

for (let i = 0; i < 500; i++) {
    const randomMag = Math.floor(Math.random() * 56 + 140);
    magassagok.push(randomMag);
}


// b

let minInd = 0;
let maxInd = 0;

for (let i = 0; i < 500; i++) {
    if (magassagok[i] < magassagok[minInd]) {
        minInd = i;
    }

    if (magassagok[i] > magassagok[maxInd]) {
        maxInd = i;
    }
}

console.log(`Legkisebb indexe: ${minInd}, értéke ${magassagok[minInd]}`)
console.log(`Legnagyobb indexe: ${maxInd}, értéke ${magassagok[maxInd]}`)


// c

let osszeg = 0;

for (let i = 0; i < 500; i++) {
    osszeg += magassagok[i];
}

let atlag = osszeg / magassagok.length;

console.log(`Összeg: ${osszeg}`)
console.log(`Átlag: ${atlag}`)


// d

let atlagAlattCount = 0;
let atlagFelettCount = 0;

for (let i = 0; i < 500; i++) {
    if (magassagok[i] < atlag)
        atlagAlattCount++;
    else if (magassagok[i] > atlag)
        atlagFelettCount++;
}

console.log(`Átlag felettiek száma: ${atlagFelettCount}`)
console.log(`Átlag alattiak száma: ${atlagAlattCount}`)


// e

let vanE195Centis = false;

for (let i = 0; i < 500; i++) {
    if (magassagok[i] == 195)
        vanE195Centis = true;
}

console.log(vanE195Centis ? "Van 195 cm magas az iskolában" : "Nincs 195 cm magas diák az iskolában.")


// f


for (let i = 0; i < magassagok.length; i++) {
    for (let j = i+1; j < magassagok.length + 1; j++) {
        if (magassagok[i] < magassagok[j]) {
            const tmp = magassagok[i];
            magassagok[i] = magassagok[j];
            magassagok[j] = tmp;
        }
    }
}

for (let i = 0; i < 500; i++) {
    console.log(magassagok[i])
}