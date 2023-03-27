import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GetMidia from './App';
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <GetMidia />
    </BrowserRouter>
)
