import { useState } from 'react'
import Loggin from './components/loggin/Loggin.jsx'
import Menu from './components/menu/Menu.jsx'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Chat from './components/chat/Chat.jsx'
import { AnimatePresence } from 'framer-motion';


function App() {


  return (
    <>
      <AnimatePresence mode="wait">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Loggin />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </HashRouter>
      </AnimatePresence>
    </>
  )
}

export default App
