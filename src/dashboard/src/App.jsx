import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ClientsPage from './pages/ClientsPage/ClientsPage';
import ClientPage from './pages/ClientPage/ClientPage';
import Toolbar from './components/Toolbar/Toolbar';

const App = () => {

  const location = useLocation();

  return (
    <main>
      {location.pathname !== "/login" && <Toolbar/>}

      <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/login' element={ <LoginPage/> } />
          <Route path='/clients' element={ <ClientsPage/> } />
          <Route path='/client' element={ <ClientPage/> } />
      </Routes>
    </main>
  )
}

export default App