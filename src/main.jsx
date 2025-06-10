import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // important to include the .jsx
import './index.css'; // optional, can be removed if empty

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
