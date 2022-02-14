import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;