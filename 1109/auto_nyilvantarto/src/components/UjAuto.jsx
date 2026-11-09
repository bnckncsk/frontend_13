import { felvesz, listaz } from "../data";
import { useState } from "react";

export default function UjAuto({setAutok}){
    // const [rendszam, setRendszam] = useState("");
    // const [evjarat, setEvjarat] = useState(2026);
    // const [fogyasztas, setFogyasztas] = useState(5.0);

    const [inputAuto, setInputAuto] = useState({
       rendszam: "",
       evjarat: 2026,
       fogyasztas: 5.0
    });

    function onSave() {
        felvesz(inputAuto);
        setAutok(listaz());
    }

    function inputsChange(inputTarget, inputValue) { // parameter: a valtoztatott input + a valtoztatas
        // console.log(`target: ${inputTarget}, value: ${inputValue}`)
        setInputAuto( prevInput => {
            return {
                ...prevInput,
                [inputTarget]: inputValue   // ez irja felul azt, amelyik valtoztatva lett
            }
        });
    }

    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Rendszám:</td>
                        <td>
                            <input type="text" id="input-rendszam" value={inputAuto.rendszam} onChange={(event) => inputsChange('rendszam', event.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Évjárat:</td>
                        <td>
                            <input type="number" id="input-evjarat" min="1900" value={inputAuto.evjarat} onChange={(event) => inputsChange('evjarat', event.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Fogyasztás:</td>
                        <td>
                            <input type="number" id="input-fogyasztas" step="0.1" min="0.1" value={inputAuto.fogyasztas} onChange={(event) => inputsChange('fogyasztas', event.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={onSave} type="button">Mentés</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}