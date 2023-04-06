import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const login = true;

root.render(
  <React.StrictMode>
    { login ?
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    :
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
