import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Refer from './components/Refer'

function App() {
  

  return (
    <div className='font-inter'>
      <Nav />
      <Hero />
      <Refer />
    </div>
  )
}

export default App
