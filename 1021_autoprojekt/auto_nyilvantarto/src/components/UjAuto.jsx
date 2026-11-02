import { felvesz, listaz } from "../data";

export default function UjAuto({setAutok}){
    function onSave() {
        const rendszam = document.getElementById('input-rendszam').value;
        const evjarat = document.getElementById('input-evjarat').value *1 //hogy number tipusu legyen (alapbol string);
        const fogyasztas = document.getElementById('input-fogyasztas').value *1;

        felvesz({
            rendszam: rendszam,
            evjarat: evjarat,
            fogyasztas: fogyasztas
        });

        setAutok(listaz());
    }

    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Rendszám:</td>
                        <td>
                            <input type="text" id="input-rendszam" />
                        </td>
                    </tr>
                    <tr>
                        <td>Évjárat:</td>
                        <td>
                            <input type="number" id="input-evjarat" min="1900" />
                        </td>
                    </tr>
                    <tr>
                        <td>Fogyasztás:</td>
                        <td>
                            <input type="number" id="input-fogyasztas" step="0.1" min="0.1" />
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