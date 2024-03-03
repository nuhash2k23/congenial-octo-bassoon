/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ../firstviewgltf.gltf -T -i -s --precision 4 
Files: ../firstviewgltf.gltf [149.99KB] > C:\Users\xotil\examplethreed\threed\firstviewgltf-transformed.glb [194.91KB] (-10%)
*/

import React, { useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, Html } from '@react-three/drei';

import gsap from 'gsap'; 
import { useThree } from '@react-three/fiber';


export function Model(props) {
  const [clicked, setClicked] = useState(false);
  const { size } = useThree();
  const camera = useRef();
  const { nodes, materials } = useGLTF('firstviewgltf-transformed.glb');
  
  const toggleOpacity = () => {
    gsap.to("h1", { opacity: 0, duration: 2 });
  };
  const mainhall = () => {
    setClicked(!clicked); // Toggle the state
    toggleOpacity();
    if (clicked) {
  
      gsap.to(camera.current.position, { x: 11.5318, y:6.2027, z: -6.1063, duration: 2,ease: 'power2.out'}); // Initial position
      gsap.to(camera.current.rotation, { x: -2.5212, y: 0.4927, z: 2.74, duration: 3 ,ease: 'power2.out'}); // Initial rotation
    } else {
       
      gsap.to(camera.current.position, { x: -0.5194, y: 0.4644, z: 1.3205, duration: 2, ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x: -0.8091, y: -0.815, z: -0.5226, duration:  3, ease:'power2.out'}); // Final rotation
    }
  };
  
  const sideroomcloseup = () => {
    setClicked(!clicked);
    toggleOpacity();

    if (clicked) {
      gsap.to(camera.current.position, { x: -3.4976, y:  1.3605 , z:1.2576, duration: 2 , ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x:   -0.8676, y: -0.606, z:  -0.3294, duration:  3, ease:'power2.out'}); // Final rotation
    } else {
      gsap.to(camera.current.position, { x: -3.0219, y: 1.0692, z: 0.9566, duration: 2 , ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x: 3.1142, y: -0.461, z: -3.133, duration:  3, ease:'power2.out'}); // Final rotation
    }
  };
  
  const secondfloorsideroom = () => {
    setClicked(!clicked); // Toggle the state
    toggleOpacity();
    if (clicked) {
      gsap.to(camera.current.position, { x: -0.5194, y: 0.4644, z: 1.3205, duration: 2 , ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x: -0.8091, y: -0.815, z: -0.5226, duration:  3, ease:'power2.out'}); // Initial rotation// Initial rotation
    } else {
     
      gsap.to(camera.current.position, { x: -3.4976, y:  1.3605 , z:1.2576, duration: 2, ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x:   -0.8676, y: -0.606, z:  -0.3294, duration:  3, ease:'power2.out'}); // Final rotation
    }
  };

  const secondfloor = () => {
    setClicked(!clicked); // Toggle the state
    toggleOpacity();
    if (clicked) {
      gsap.to(camera.current.position, { x: -0.5194, y: 0.4644, z: 1.3205, duration: 2 , ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x: -0.8091, y: -0.815, z: -0.5226, duration:  3, ease:'power2.out'}); // Initial rotation
    } else {
      gsap.to(camera.current.position, { x: -0.2825, y: 1.4285, z: -1.2834, duration: 2 , ease:'power2.out'}); // Final position
      gsap.to(camera.current.rotation, { x: -2.8908, y: -0.4832, z: -3.1328, duration:  3, ease:'power2.out'}); // Final rotation
    }
  };
  const buttonStyle = {
   
    color: 'white',
  
    borderRadius: '23px',
    cursor: 'pointer',
    width: '200px',
    paddingTop:'10px',
    paddingBottom:'10px',

    fontFamily: 'POPPINS',
    fontWeight: 400,
    fontSize: "1.2em",
    backgroundColor: 'black',
  
    transform: "translate(0px, -100px)"

  };
  const header ={
    fontFamily: 'POPPINS',
    fontWeight: 800,
    fontSize: "7.2em",
  color:'white',
  lineHeight: '142px',
  textDecoration: 'underline',


    position: 'absolute',
   wordBreak: "break",

   transform: "translate(-600px, -250px)"
  }
  const barstyle = {
    backgroundColor: 'transparent',
    color: '#fff',
  
    display: 'flex',

    flexDirection:'column',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    marginLeft: "25vw",
    gap:'10px',
    scale:'1.14'
   

  };
  const barstylemobile = {
    backgroundColor: 'transparent',
    color: '#fff',
  
    display: 'flex',

    flexDirection:'column',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    marginLeft: "5vw",
    gap:'10px',
    scale:'.64',
   

  };


  const fov = size.width >= 1024 ? 40 : 135;
  const swapclass = size.width >= 1024 ? barstyle : barstylemobile;
  return (
    <>
    <Html >
      {}

<div style={swapclass}>
<button style={buttonStyle} onClick={mainhall}>MAIN HALL</button>
<button style={buttonStyle} onClick={secondfloor}>DINING</button>
<button style={buttonStyle} onClick={secondfloorsideroom}>LIVING ROOM</button>
<button style={buttonStyle} onClick={sideroomcloseup}>BUYING PROSPECTS</button>
</div>
</Html>
    <group {...props} dispose={null}>
     <pointLight intensity={10.9} decay={2} color="orange" position={[-0.0522, 0.0883, 1.5602]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[-2.7926, 0.3948, -0.412]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={6} decay={2} position={[-2.6758, 0.4416, 0.9514]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={20} color="cyan" decay={2} position={[0.7178, 0.4416, -0.7183]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={11.2} decay={2} color='beige'position={[-2.5024, 1.4108, -0.5715]} rotation={[-Math.PI / 2, 0, 0]} />
 
      <spotLight intensity={400.71}  color={"orange"} decay={2} position={[1.9845, 3.9108, -6.019201]} rotation={[0,0,0]} />
      <ambientLight intensity={.8} />
      {/* <directionalLight intensity={0.71} decay={2} position={[0.7829, -0.4238, 2.3365]} rotation={[Math.PI / 2, 0, 0]} /> */}
      {/* <directionalLight intensity={0.4} decay={2} position={[0.782, 1.8903, 3.3368]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <PerspectiveCamera  ref={camera} makeDefault={true} far={1000} near={0.1} fov={fov} position={[8.0974, 0.493, -3.9147]} rotation={[0.0862, 1.2593, -0.0778]} scale={0.48}>
    
      </PerspectiveCamera>
      {/* <directionalLight intensity={4} decay={2} color="#ffeeea" position={[25.2133, 5.6615, 0.9086]} rotation={[-1.2558, 1.074, 1.5062]} /> */}
      <mesh castShadow receiveShadow geometry={nodes.Cube020.geometry} material={materials.PaletteMaterial001} position={[-0.0836, 1.483, 0.1628]} scale={[1, 1, 1.0893]} />

      <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials.PaletteMaterial002} position={[-1.8538, 0.5999, 1.800]} scale={0.0836} />



      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.PaletteMaterial003} position={[1.5532, 0.1459, 0.8094]} scale={[0.0116, 0.4496, 0.8506]} />

      <mesh castShadow receiveShadow geometry={nodes.Plane001.geometry} material={materials.PaletteMaterial004} position={[0.2886, 1.1525, -1.3327]} rotation={[1.5632, 0, 0]} scale={[0.2233, 0.1909, 0.1909]} />
    </group>
    </>
  )
}



useGLTF.preload('/firstviewgltf-transformed.glb')