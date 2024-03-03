
import { Model } from '../src/Component/Firstviewgltf.jsx';
import { Canvas } from '@react-three/fiber';


import './App.css';
import { CameraProvider } from './Cameramove.jsx';
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Suspense } from 'react';

function App() {
  

  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  return (

    
    <CameraProvider>

  
  
       <Canvas shadows className='CANVAS'>
       <OrbitControls enableZoom={false} rotateSpeed={0.002} panSpeed={0.04}></OrbitControls>
       <Suspense fallback={<Loader/>}></Suspense>
          <Model/>
          <Suspense/>
        
      </Canvas> 

       
      </CameraProvider>
 


       
        


   
  )
}

export default App