let s = "Ez egy \"egyszerű\" string";       // \ jellel lehet escapelni a karaktereket, így kiirathatjuk stringben is akár a ""-t
let s2 = `Akár
több sorba
is lehet
tördelni a stringet`;

// A stringet tömbként is kezelhetjük
console.log(s[3]);
console.log(s.length);
console.log(s[49]);
console.log(s[-2]);


// Stringkezelő függvények 
console.log(s.charAt(9));
console.log(s.at(-2))       // negatív index --> visszafelé indexel
console.log(s.indexOf('e'));
console.log(s.lastIndexOf('e'));
console.log(s.includes("egy"));
console.log(s.substring(9, 10));    // A felső indexű értéket már nem tartalmazza:   [mettől, meddig[
console.log(s.replace(' ', '-'));   // Az első előfordulását az első paraméternek kicseréli a másodikra
console.log(s.replaceAll(' ', '-'));    // Az összeset kicseréli

let nev = "    özv. Kolompár Mária      ";
console.log(nev);
console.log(nev.trim());

let ido = "9:3";    // úgy szeretnénk látni, hogy 09:03
let formazottIdo = ido.substring(0,1).padStart(2,'0') + ':' + ido.substring(2,3).padStart(2,'0');
console.log(formazottIdo)

let szam = "13.7";    // de én azt szeretném, hogy két tizedesjegyig legyen kiírva
console.log(szam.padEnd(5, '0'));


// Konkatenáció
console.log(s.concat(" még valami..."))
console.log(s + " még valami...");


// Módosítás
s[0] = 'A';             // ilyet nem lehet csinálni
console.log(s);

s = 'A' + s.substring(1);       // helyette így
console.log(s);

s = s.substring(0, 6) + 'X' + s.substring(7);   // string közepére is lehet
console.log(s);


// Vágás
let adatok = "Sipi Rupi_Szekszárd_tanuló_pörkölt";
let adatokStringTomb = adatok.split('_');
console.log(adatokStringTomb);



/* Feladat:
Dolgozzuk fel a tömb elemeit!
A tömb minden egyes elemét vágjuk szét a 3 különböző információ mentén (név;magasság;súly)
Írjuk ki a konzolra soronként az egyes emberek tulajdonságát (helytöltő nullákra figyelni!)
Pl.: Név: Kiss Géza, Magasság: 177.57 cm, Súly: 64.50 kg
     Név: Nagy Mária, Magasság: 164.00 cm, Súly: 59.00 kg
*/

const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];

for (const sor of jellemzok) {
    let bontottSor = sor.split(';');

    if (bontottSor[2].length > 3) {
        console.log(`Név: ${bontottSor[0]}, Magasság: ${bontottSor[1].padEnd(6, '0')} cm, Súly: ${bontottSor[2].padEnd(5, '0')} kg`);
    } else {
        console.log(`Név: ${bontottSor[0]}, Magasság: ${bontottSor[1].padEnd(6, '0')} cm, Súly: ${bontottSor[2] + '.00'} kg`);
    }
}

// vagy
console.log("megoldás 2")

function sorToString(sor) {
    let nev = sor[0];
    let magassag = sor[1];
    if (magassag.includes('.'))
        magassag = magassag.padEnd(6, '0');
    else
        magassag = (magassag + '.').padEnd(6, '0');

    let suly = sor[2];
    if (suly.includes('.'))
        suly = suly.padEnd(5, '0');
    else
        suly = (suly + '.').padEnd(5, '0');
    
    return `Név: ${nev}, Magasság: ${magassag} cm, Súly: ${suly} kg`
}

for (const sor of jellemzok) {
    let bontottSor = sor.split(';');

    console.log(sorToString(bontottSor));
}