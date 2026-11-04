import Termek from "./Termek";
import { lekerdez, torol } from "../data";

export default function Termekek({termekek, setTermekek}){
    function handleTorles(id) {
        torol(id)
        setTermekek(lekerdez())
    };

    return(
        termekek.map(t => <Termek key={t.id} {...t} onTorles={ () => handleTorles(t.id) }/>)
    );
}