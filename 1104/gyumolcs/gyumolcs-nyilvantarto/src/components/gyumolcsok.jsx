import Gyumolcs from "./gyumolcs";
import { torol, listazgyumi } from "../data";

export default function Gyumolcsok({gyumolcsok, setGyumolcsok}) {
    function handleTorles(nev){
        torol(nev)
        setGyumolcsok(listazgyumi())
    }

    return(
        gyumolcsok.map(g => <Gyumolcs key={g.nev} {...g} onTorles={ () => handleTorles(g.nev)}/>)
    );
}