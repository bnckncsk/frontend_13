export default function Termek({id, termekNev, ar, kaloria, onTorles}) {
    return (
        <div className="termek">
            <p>Azonosító: {id}</p>
            <p>Termék neve: {termekNev}</p>
            <p>Ár : {ar}</p>
            <p>Kalória: {kaloria}</p>
            <button onClick={onTorles}>Törlés</button>
        </div>
    )
}