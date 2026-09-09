let szam = 3;
szam = 3.14;
let szoveg = "Szia Uram";
szoveg = 'Hello-bello';

let osszefuzve = "A kedvenc számom: " + szam;
osszefuzve = `A kedvenc számom: ${szam*2}`;

let logikai = true;
logikai = false;

let n = null;
let u = undefined;

let szam2 = 43.21;
if(szam2 > 0) {
    console.log("Pozitív")
} else if ( szam2 < 0) {
    console.log("Negatív")
} 
else {
    console.log("Nem pozitív")
}

let i = undefined;
for (i=0; i<10; i++);
console.log(i);

let paros = 2;
while (paros <= 10) {
    console.log(paros);
    paros += 2;
}


/////////////

// Tömbök
let autok = ["Audi", "BMW", "Toyota", "Kia"];
console.log(autok[0]);
autok[1] = "Ford";
console.log(autok[1]);

// új elem hozzáfűzése (tömb végére)
autok.push("Skoda");

// tömb bejárása ciklussal
for(i=0; i<autok.length; i++)
    console.log(`${i}.: ${autok[i]}`);

console.log(`Törölt elem: ${autok.pop()}`);


// Függvények
// (Camel-case)
function udvozlet() {
    console.log("Üdvözöllek dicső lovag");
}

let udv = () => { console.log("Üdv!") };

udvozlet();

function negyzetreEmel(num) {
    return num * num;
}

let negyzet = num => num*num; // egy parameternel elhagyhato a zarojel, ha returnolunk akkor is


// Tömbök 2
// Elem szűrése a tömbben

console.log(autok.filter(auto => auto == "Toyota"));

// Törlés: Töröljük ki a Toyotákat a tömbből

autok = autok.filter(auto => auto != "Toyota");
console.log(autok);

// Index meghatátozása érték alapján

autok.push("Honda");
autok.push("Mercedes");
autok.push("BYD");

console.log( autok.findIndex(auto => auto == "Mercedes"));


// Spread operátor (...) - szétbontja a tömböt elemeire

autok = ["Seat", ...autok, "Nissan"];
console.log(autok);


// Rest paraméter
// Készítsünk függvényt amely számokat ad össze, viszaadja a számok összegét

function osszead(...szamok) {       // összefűzi tömbbé a paramétereket
    let osszeg = 0;
    for ( let i = 0; i< szamok.length; i++) {
        osszeg += szamok[i];
    }

    return osszeg;
}

console.log(osszead(2, 3, 4, 5));


// További tömbfüggvények

console.log(autok.includes("Opel"));
console.log(autok.includes("Honda"));

console.log(autok.toString());

console.log(autok.at(2));

console.log(autok.shift());

console.log(Array.isArray(szam));
console.log(Array.isArray(autok));


// Feladat
/*
    Adott egy 5 elemű tömb, amely egész számokat tartalmaz: [36, -2, 112, 101, 22]
    1.) Adjon hozzá a tömbhöz 10 új, véletlen egész számot a [-100; 100] tartományról (Math random, floor)
    2.) Szűrjük ki egy új tömbbe a pozitív ÉS páros számokat
    3.) Döntsük el, hogy az új tömbben van-e 100-nál nagyobb szám
    4.) Határozzuk meg az új tömb legnagyobb értékű elemét
*/

let tomb = [36, -2, 112, 101, 22];

// 1
for (let i = 0; i < 10; i++)
    tomb.push(Math.floor(Math.random() * 200 - 100));

console.log(tomb)

// 2
let szurt = tomb.filter(szam => szam % 2 == 0 && szam > 0);
console.log(szurt);

// 3
let vanNagyobb = false;

for (let i = 0; i < szurt.length; i++) {
    if (szurt[i] > 100) {
        vanNagyobb = true;
        break;
    }
}

console.log(vanNagyobb ? "Van 100-nál nagyobb szám a szűrt tömbben." : "Nincs 100-nál nagyobb szám az új tömbben.");

// 4

function maxFinder(arr) {
    let maxInd = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxInd]) {
            maxInd = i;
        }
    }

    return arr[maxInd];
}

console.log(`A legnagyobb szám: ${maxFinder(szurt)}`);


// 3/2 (igy is lehet)

console.log(szurt.findIndex( t => t > 100) >= 0 ? "Igen" : "Nem");


// 4/2 (igy is lehet)
console.log(Math.max(...tomb))