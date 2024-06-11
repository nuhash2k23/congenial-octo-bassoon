
import React, { useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import gsap from 'gsap'; 

export function Model2(props) {
  const { nodes, materials } = useGLTF('./floorplan.glb');
  const [clicked, setClicked] = useState(false);
  const {size} = useThree();
  const camera = useRef();

const guest = () =>{
  setClicked(!clicked);
  if(clicked){
    gsap.to(camera.current.position, {x:13.757, y:3.601, z:-3.35, duration: 1,ease: 'ease'});
    gsap.to(camera.current.rotation,{x:-3.015,y: 0.783, z:3.052,duration: 1,ease: 'ease'})
    gsap.to(camera.current, { fov: 70, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });

  }
}
const cto = () =>{
  setClicked(!clicked);
  if(clicked){
    gsap.to(camera.current.position, {x:10.27, y:3.601, z:-2.25, duration: 1,ease: 'ease'});
    gsap.to(camera.current.rotation,{x:-3.015,y: .49, z:3.052,duration: 1,ease: 'ease'})
    gsap.to(camera.current, { fov: 80, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });

  }
}

const workload = () =>{
  setClicked(!clicked);
  if(clicked){
    gsap.to(camera.current.position, {x:7, y:3.75, z:-1.15, duration: 1,ease: 'ease'});
    gsap.to(camera.current.rotation,{x:-3.015,y: 1.29, z:3.032,duration: 1,ease: 'ease'});
    gsap.to(camera.current, { fov: 50, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });

  }
}
const lastspace = () =>{
  setClicked(!clicked);
  if(clicked){
    gsap.to(camera.current.position, {x:-.9, y:3.801, z:-5.25, duration: 1,ease: 'ease'});
    gsap.to(camera.current.rotation,{x:-3.25,y:-0.72, z:3.052,duration: 1,ease: 'ease'});
    gsap.to(camera.current, { fov: 45, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });

  }
}

const firstview = () =>{
  setClicked(!clicked);
  if(clicked){
    gsap.to(camera.current.position, {x:20.942, y:8.992, z:-10.09, duration: 1,ease: 'ease'});
    gsap.to(camera.current.rotation,{x:-2.532,y: 0.85, z:2.729,duration: 1,ease: 'ease'});
    gsap.to(camera.current, { fov: 35, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });

  }
}


const buttonStyle = {
  color: 'rgba(0, 0, 0, 0.71)',
  borderRadius: '33px',
  cursor: 'pointer',
  width: '200px',
  paddingTop: '10px',
  paddingBottom: '10px',
  fontFamily: 'POPPINS',
  fontWeight: 600,
  fontSize: '1.2em',
  background: 'rgba(255, 255, 255, 0.21)',
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  transform: 'translate(0px, -50px)',
borderColor: "black",

backdropFilter: "blur(6.3px)"


};


const barstyle = {
  backgroundColor: 'transparent',
  color: '#fff',

  display: 'flex',
position: 'absolute',
  flexDirection:'row',
  justifyContent:'center',
  alignItems: 'center',
  border: 'none',
  cursor: 'pointer',
marginTop: "90vh",
width:'100vw',
  // marginLeft: "14vw",
  gap:'10px',
  scale:'.76',

 

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

  const swapclass = size.width >= 1024 ? barstyle : barstylemobile;
  return (
    <>
     <Html position="fixed" as='div' className='html'>
      {}

<div style={swapclass}>
<button style={buttonStyle} onClick={guest}>Guest Room</button>
<button style={buttonStyle} onClick={cto}>CTO</button>
<button style={buttonStyle} onClick={workload}>Working Ground</button>
<button style={buttonStyle} onClick={lastspace}>Exit</button>
<button style={buttonStyle} onClick={firstview}>Wide View</button>


</div>
</Html>
<group {...props} dispose={null}>
      {/* <pointLight
        intensity={2.3}
        decay={2}
        position={[6.17, 2.889, -0.428]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      />
      <pointLight
        intensity={20}
        decay={2}
        position={[7.981, 3.593, -0.428]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      />
 
      <pointLight
        intensity={20}
        decay={2}
        position={[3.057, 3.593, -0.428]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      />
      <pointLight
        intensity={18}
        decay={2}
        position={[2.893, 3.593, -1.286]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      />
      <pointLight
        intensity={9}
        decay={2}
        position={[5.956, 3.593, -0.428]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      />
      <pointLight
        intensity={9}
        decay={2}
        position={[9.063, 3.593, -0.896]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      />
      <pointLight
        intensity={10}
        decay={2}
        position={[7.981, 3.593, -1.674]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      /> */}
           {/* <pointLight
        intensity={10}
        decay={2}
        position={[8.022, 3.593, 2.428]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.557}
      /> */}
      <PerspectiveCamera
        makeDefault={true}
        far={1000}
        ref={camera}
        near={0.1}
        fov={32.269}
        position={[16.642, 6.88, -6.15]}
        rotation={[-2.532, 0.85, 2.729]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials['Marble_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={materials['Plant_Stem.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_4.geometry}
        material={materials['Plant_Leaf.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_5.geometry}
        material={materials.Sign}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_6.geometry}
        material={materials.Color_007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_7.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_8.geometry}
        material={materials['Material.005']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Plane001_9.geometry} material={materials.F} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_10.geometry}
        material={materials.Color_002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_11.geometry}
        material={materials.Color_003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_12.geometry}
        material={materials.Color_000}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_13.geometry}
        material={materials.FrontColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_14.geometry}
        material={materials.Color_001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_15.geometry}
        material={materials['Kanaba-Inner']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_16.geometry}
        material={materials['Kanaba-Base']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_17.geometry}
        material={materials['Kanaba-Outer']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_18.geometry}
        material={materials['Kanaba-Pillows']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_19.geometry}
        material={materials['MetalBase.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_20.geometry}
        material={materials.Fanta}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_21.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_22.geometry}
        material={materials.CocaCola_Emissive}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_23.geometry}
        material={materials.CocaCola_Zero}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_24.geometry}
        material={materials.Pepsi}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_25.geometry}
        material={materials.Emission}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_26.geometry}
        material={materials['Steel.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_27.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_28.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_29.geometry}
        material={materials['Material.014']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_30.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_31.geometry}
        material={materials['Sign.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_32.geometry}
        material={materials['Material.010']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_33.geometry}
        material={materials['Material.016']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_34.geometry}
        material={materials['Material.006']}
      />
    </group>

    </>
  )
}

useGLTF.preload('./floorplan.glb')