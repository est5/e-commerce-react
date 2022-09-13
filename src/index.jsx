import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/cart/Cart';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App render={'catalog'} />} />
        <Route path="/cart" element={<App render={'cart'} />} />
        <Route path="/favorite" element={<App render={'favorite'} />} />

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
