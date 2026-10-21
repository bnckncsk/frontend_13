import { useState } from 'react'
import './App.css'

import Autok from './components/Autok'
import { listaz } from './data'

function App() {
  const [autok, setAutok] = useState(listaz());

  return (
      <>
        <header>
          <h1>Autó nyilvántartó</h1>
        </header>
        <main>
          <Autok autok={autok} setAutok={setAutok} />
        </main>
      </>
  )
}

export default App
