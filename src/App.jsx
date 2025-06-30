import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'

function App() {
  const [url, seturl] = useState("")

  return (
    <>
    <Hero></Hero>
    <Demo></Demo>
      
    </>
  )
}

export default App
