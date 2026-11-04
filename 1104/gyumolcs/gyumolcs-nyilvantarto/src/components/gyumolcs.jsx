export default function Gyumolcs({nev, rost, cukor, onTorles}) {
    return(
        <div className="gyumolcs">
            <p>Név: {nev}</p>
            <p>Rosttartalom: {rost}</p>
            <p>Cukortartalom: {cukor}</p>
            <button onClick={onTorles}>Törlés</button>
        </div>
    );
}