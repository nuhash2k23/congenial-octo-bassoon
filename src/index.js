import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import ModelScene from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<h1 className='h1'>APARTMENT #345GH</h1>
<div className='top'>
  <div className='lg'>BUILD.</div>
  <div className='mid'>
  <li>HOME</li>
    <li>PROJECTS</li>
    <li>COUNTRY</li>
    
    <li>OUR HISTORY</li>
  </div>
  <div className='end'>
    FREE CONSULTATION
  </div>
</div>
 
<App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={64.77} position={[8.532, 5.203, -9.106]} rotation={[-2.521, 0.493, 2.871]} scale={0.407} /> */}
