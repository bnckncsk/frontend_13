export default function Auto({rendszam, evjarat, fogyasztas, onTorles}){

    return (
         <div>
            <p>Rendszám: {rendszam}</p>
            <p>Évjárat: {evjarat}</p>
            <p>Fogyasztás: {fogyasztas}</p>
            <button onClick={onTorles}>Törlés</button>
         </div>
    );
}