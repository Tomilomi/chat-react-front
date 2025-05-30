import { useState } from 'react'
import Loggin from './components/loggin/Loggin.jsx'
import Menu from './components/menu/Menu.jsx'
import './App.css'
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import Chat from './components/chat/Chat.jsx'
import { AnimatePresence } from 'framer-motion';
import Profile from './components/profile/Profile.jsx'
import RegisterForm from './components/registerForm/RegisterForm.jsx'
import Error404 from './components/error/Error404.jsx'

function App() {


  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loggin />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  )
}

export default App
