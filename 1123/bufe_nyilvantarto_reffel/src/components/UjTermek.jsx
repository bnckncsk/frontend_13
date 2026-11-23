import { felvesz, lekerdez } from "../data";
import { useRef } from "react";

export default function UjTermek({ termekek, setTermekek}) {
    const termekNev = useRef();
    const ar = useRef();
    const kaloria = useRef(); 

    function onSave() {
        const givenId = Math.max(...termekek.map(t => t.id)) + 1;

        const inputTermek = {
            id: givenId,
            termekNev: termekNev.current.value,
            ar: ar.current.value,
            kaloria: kaloria.current.value,
        }

        felvesz(inputTermek);
        setTermekek(lekerdez())
    }

    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Termék neve:</td>
                        <td><input type="text" ref={termekNev}></input></td>
                    </tr>
                    <tr>
                        <td>Termék ára:</td>
                        <td><input type="number" ref={ar} min="0"></input></td>
                    </tr>
                    <tr>
                        <td>Kalóriák száma:</td>
                        <td><input type="number" ref={kaloria} min="1"></input></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="button" onClick={onSave}>Felvétel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}