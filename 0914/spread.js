// Spread operátor

const szamok = [1, 2, 3, 4, 5];
console.log(szamok);
console.log(...szamok);

const ujSzamok = [-3, -4, -5, ...szamok];
console.log(ujSzamok)



// Rest paraméter - függvény paramétereit gyúrja egy tömbbé

function atlag(...szamok) {
    let osszeg = 0;
    for (let i = 0; i < szamok.length; i++)
        osszeg += szamok[i];

    return osszeg/szamok.length;
}

console.log(atlag(12, 19));
console.log(atlag(4, 8, 3));
console.log(atlag(23, 12, 10, 9, 3, 45, 12, 67, 23));