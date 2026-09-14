// az osztály != objektum

class Szemely {
    constructor(nev, foglalkozas, szuletesiEv) {
        this.nev = nev;
        this.foglalkozas = foglalkozas;
        this.szuletesiEv = szuletesiEv;
    }

    hanyEves() {
        const datum = new Date();
        return datum.getFullYear() - this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely {
    static bonusz = 10;
    #azonosito = undefined;
    
    constructor(nev, foglalkozas, szuletesiEv, fizetes) {
        super(nev, foglalkozas, szuletesiEv);
        this.fizetes = fizetes;
        
    }

    get azonosito() {
        return this.#azonosito;
    }

    set azonosito(azon) {
        if (typeof(azon) == 'number') {
            this.#azonosito = azon;
        }
    }

    /**
     * Bónuszt csak decemberben kapnak az emberek:
     *  - ha december van, akkor a bónusszal emelt fizetés a fizetés
     *  - különben a normál fizut kapják
     *  - a JS 0-tól kezdi a hónapok számozását
     */

    fizetesEbbenAHonapban() {
        if ((new Date()).getMonth == 11)
            return this.fizetes * (1+(Alkalmazott.bonusz/100));
        else
            return this.fizetes;
    }
}


const bela = new Szemely("Vak Béla", "kéményseprő", 1975);
console.log(bela);
console.log(`${bela.nev} ${bela.hanyEves()} éves idén.`);

const irenke = new Alkalmazott("Kovács Irén", "recepciós", 1968, 523999);
irenke.azonosito = "123456";
console.log(irenke.azonosito)
irenke.azonosito = 123456;
console.log(irenke.azonosito)

console.log(irenke.fizetesEbbenAHonapban());




/**
 * Készítsen egy Kisfonok osztalyt, amely az Alkalmazott osztályból származik
 * Készítse el az osztályhoz a konstruktort, illetve vegyen még fel pluszba egy tulajdonságot is:
 *  - hány beosztottja van a kisfőnöknek: ez csak lekérdezhető, beállítani csak a konstruktorban lehet
 */

class Kisfonok extends Alkalmazott{
    #beosztottakDb = 0;

    constructor(nev, foglalkozas, szuletesiEv, fizetes, beosztottakDb) {
        super(nev, foglalkozas, szuletesiEv, fizetes);

        if (beosztottakDb >= 0 && beosztottakDb <= 20)
            this.#beosztottakDb = beosztottakDb;
    }

    get beosztottakDb() { return this.#beosztottakDb; }
}

const kisfonok = new Kisfonok("Neve", "Fogl", 2001, 390000, 5);
console.log(kisfonok);
kisfonok.beosztottakDb = 7;
kisfonok.azonosito = 23;
console.log(kisfonok);  // itt mar nem irja at, mert nincs settere
