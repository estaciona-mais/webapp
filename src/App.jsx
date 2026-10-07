import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'

function App() {
  // const [tema, setTema] = useState(() => {
  //   const salvo = localStorage.getItem('tema')
  //   if (salvo) return salvo

  //   const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
  //   if(prefereEscuro) return 'dark'

  //   return 'light'
  // })

  // function mudarTema() {
  //   setTema(t => (t === 'light' ? 'dark' : 'light'))
  // }
  
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', tema)
  //   localStorage.setItem('tema', tema)
  // }, [tema])

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
