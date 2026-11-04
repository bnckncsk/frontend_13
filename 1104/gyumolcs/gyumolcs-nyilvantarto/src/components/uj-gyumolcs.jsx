import { listazgyumi, felvesz } from "../data";

export default function UjGyumolcs({setGyumolcsok}){
    function onSave() {
        const nev = document.getElementById("input-nev").value;
        const cukor = document.getElementById("input-cukor").value * 1;
        const rost = document.getElementById("input-rost").value * 1;

        felvesz({
            nev: nev,
            cukor: cukor,
            rost: rost
        });

        setGyumolcsok(listazgyumi())
    }

    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Gyümölcs neve:</td>
                        <td><input type="text" id="input-nev"></input></td>
                    </tr>
                    <tr>
                        <td>Rosttartalma:</td>
                        <td><input type="number" id="input-rost"></input></td>
                    </tr>
                    <tr>
                        <td>Cukortartalma:</td>
                        <td><input type="number" id="input-cukor"></input></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="button" onClick={onSave}>Mentés</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}