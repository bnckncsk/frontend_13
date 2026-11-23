let TERMEKEK = [
    {
        id: 1,
        termekNev: "szevics",
        ar: 650,
        kaloria: 350
    },
    {
        id: 2,
        termekNev: "kola",
        ar: 550,
        kaloria: 550
    },
    {
        id: 3,
        termekNev: "kifli",
        ar: 45,
        kaloria: 100
    },
    {
        id: 4,
        termekNev: "ice tea",
        ar: 500,
        kaloria: 150
    }
];

export function lekerdez() {
    return TERMEKEK;
}

export function felvesz(ujTermek){
    TERMEKEK = [...TERMEKEK, ujTermek];
}

export function torol(id) {
    TERMEKEK = TERMEKEK.filter(t =>t.id != id)
}