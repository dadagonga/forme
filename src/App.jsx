import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import noviKorisnik from "./noviKorisnik"

function App() {
  const [tekst, setText] = useState("")

  const handleTextChange = event => {
    setText(event.target.value)
  }
  
  const handleSubmitForm = () => {
    event.preventDefault()
    alert("Upiši tekst:" + tekst)
    setText("")
  }

  return (
  <form onSubmit={handleSubmitForm}>
    <label>
        Upiši tekst: <br />
        <input type='tekst' name="tekst" value={tekst} onChange={handleTextChange}/>
    </label>
    <p></p>
    <div>
      <input type="submit" value="Početno stanje" />
    </div>
  </form>

  )
}

export default App
