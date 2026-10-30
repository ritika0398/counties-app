import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import { ThemeProvider } from '../contexts/ThemeContext'

import { Outlet } from 'react-router-dom'
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
