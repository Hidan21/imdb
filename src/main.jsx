import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import PeliculasProvider from './context/MovieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeliculasProvider>
      <App />
    </PeliculasProvider>
  </React.StrictMode>
);
