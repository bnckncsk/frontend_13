import { felvesz, lekerdez } from "../data";

export default function UjTermek({termekek, setTermekek}) {
    function onSave() {
        const termekNev = document.getElementById("input-termekNev").value;
        const ar = document.getElementById("input-ar").value * 1;
        const kaloria = document.getElementById("input-kaloria").value * 1;
        
        felvesz({
            id: Math.max(...termekek.map(t => t.id)) + 1,
            termekNev: termekNev,
            ar: ar,
            kaloria: kaloria
        });

        setTermekek(lekerdez())
    }

    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Termék neve:</td>
                        <td><input type="text" id="input-termekNev"></input></td>
                    </tr>
                    <tr>
                        <td>Termék ára:</td>
                        <td><input type="number" id="input-ar"></input></td>
                    </tr>
                    <tr>
                        <td>Kalóriák száma:</td>
                        <td><input type="number" id="input-kaloria"></input></td>
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