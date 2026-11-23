import { useState } from 'react'
import './App.css'
import { lekerdez } from './data'
import Termekek from './components/Termekek'
import UjTermek from './components/UjTermek';

function App() {
  const [termekek, setTermekek] = useState(lekerdez());

  return (
    <>
      <header>
        <h1>Büfé nyilvántartó</h1>
      </header>
      <main>
        <section id="formDiv">
          <h2>Új termék felvétele</h2>
          <div>
            <UjTermek termekek={termekek} setTermekek={setTermekek}/>
          </div>
        </section>
        <section id='termekekDiv'>
          <h2>Termékek</h2>
          <div id='termekek'>
            <Termekek termekek={termekek} setTermekek={setTermekek}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
