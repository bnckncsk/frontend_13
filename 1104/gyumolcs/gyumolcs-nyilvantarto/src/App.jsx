import { useState } from 'react'
import './App.css'
import { listazgyumi } from './data'
import Gyumolcsok from './components/gyumolcsok'
import UjGyumolcs from './components/uj-gyumolcs'

function App() {
  const [gyumolcsok, setGyumolcsok] = useState(listazgyumi())

  return (
    <>
      <header>
        <h1>Gyümölcs adattároló</h1>
      </header>
      <main>
        <section id='gyumolcsokDiv'>
          <h2>Gyümölcsök</h2>
          <div id='gyumolcsok'>
            <Gyumolcsok gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
          </div>
        </section>
        <section id="formDiv">
          <h2>Új gyümölcs felvétele</h2>
          <div>
            <UjGyumolcs gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
