let GYUMOLCSOK = [
    {
        nev: "Narancs",
        rost: 2.4,
        cukor: 8.7
    },
    {
        nev: "Cseresznye",
        rost: 2.1,
        cukor: 12.8
    },
    {
        nev: "Banán",
        rost: 2.6,
        cukor: 13
    }
]

export function listazgyumi(){
    return GYUMOLCSOK;
}

export function felvesz(ujgyumi) {
    GYUMOLCSOK = [...GYUMOLCSOK, ujgyumi];
}

export function torol(gyumolcsnev) {
    GYUMOLCSOK = GYUMOLCSOK.filter(g => g.nev != gyumolcsnev);
}