import Auto from "./Auto";
import { listaz, torol } from "../data";

export default function Autok({autok, setAutok}){
    function handleTorles(rendszam){
        // eredeti tömbből törlünk
        torol(rendszam);
        // majd frissítjük a state-et
        setAutok(listaz());
    }

    return (
        autok.map( a => <Auto key={a.rendszam} {...a} onTorles={ () => handleTorles(a.rendszam) } /> )
    );
}