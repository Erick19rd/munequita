import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Componenteimg from './Componenteimg';
import Contadorcorazon from './Contadorcorazon';
import Contadorfeliz from './Contadorfeliz';
import Footer from './Footer';
import Contadortristeza from './Contadortristeza';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='contenedor'>
    <Componenteimg/>
   
    <Contadorcorazon/>
    <Contadorfeliz/>    
    <Contadortristeza/>
  
    </div>
    <Footer/>

  </React.StrictMode>
);
