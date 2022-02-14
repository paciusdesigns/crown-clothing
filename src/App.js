import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;