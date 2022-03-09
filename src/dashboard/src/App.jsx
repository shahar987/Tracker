import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ClientsPage from './pages/ClientsPage/ClientsPage';
import ClientPage from './pages/ClientPage/ClientPage';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/clients' element={ <ClientsPage/> } />
        <Route path='/client' element={ <ClientPage/> } />
    </Routes>
  )
}

export default App