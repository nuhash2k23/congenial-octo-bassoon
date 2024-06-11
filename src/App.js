
import { Model2 } from '../src/Component/Firstviewgltf.jsx';
import { Canvas } from '@react-three/fiber';


import './App.css';
import { CameraProvider } from './Cameramove.jsx';
import { Html, OrbitControls, useProgress,Loader, Environment, SpotLight } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Model } from './Component/New.jsx';

function App() {
  



  return (
<>

    
    {/* <CameraProvider> */}

  
  
       <Canvas shadows className='CANVAS'>
   
       <OrbitControls ></OrbitControls>
   <spotLight intensity={5.7} color={"beige"} position={[0,1.0,.41]}/>
          <Model/>
        {/* <ambientLight intensity={.51}/> */}
        <Environment preset='forest' />
      </Canvas> 
     
   
      {/* </CameraProvider> */}
  

       
        
      </>

   
  )
}

export default App