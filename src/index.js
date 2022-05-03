import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage/>}/>
          <Route path="shop" element={<ShopPage/>} />
          <Route path="signin" element={<SignInAndSignUp/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
