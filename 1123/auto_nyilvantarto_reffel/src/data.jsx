let AUTOK = [
    {
        rendszam: 'FTH-123',
        evjarat: 1999,
        fogyasztas: 6.6
    },
    {
        rendszam: 'RGU-638',
        evjarat: 2020,
        fogyasztas: 5.3
    },
    {
        rendszam: 'GJE-135',
        evjarat: 2006,
        fogyasztas: 4.9
    },
];

export function listaz(){
    return AUTOK;
}

export function felvesz(ujAuto){
    // AUTOK.push(ujAuto);      nem jo, nem frissiti az egesz tombot ezert nem jelenik meg az uj auto sem
    if (AUTOK.find( a => a.rendszam == ujAuto.rendszam))
        return;

    AUTOK = [...AUTOK, ujAuto];
}

export function torol(rendszam){
    AUTOK = AUTOK.filter( a => a.rendszam != rendszam );
}