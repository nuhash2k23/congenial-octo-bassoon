
import React, { useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import useSound from "use-sound";
import partone from '../dorm-door-opening-6038.mp3';

export function Model(props) {
  const { nodes, materials } = useGLTF('./Finel.glb')
  const [clicked, setClicked] = useState(false);
  const {size} = useThree();
  const camera = useRef();
  const group = useRef()
  const [play] = useSound(partone);

const guest = () =>{
  setClicked(!clicked);
  if(clicked){
    gsap.to(camera.current.position, {x:-0.03, y:0.4, z:-0.226, duration: 2.5,ease: 'ease'});
    // gsap.to(camera.current.rotation,{x:-0.061,y: -0.226, z:-0.014,duration: 1,ease: 'ease'})
    gsap.to(camera.current, { fov: 10, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });
    gsap.to(group.current.rotation, { y: -Math.PI / 2, duration: 1, ease: 'ease' });
  }


}

const cto = () =>{
    setClicked(!clicked);
    if(clicked){
      gsap.to(camera.current.position, {x:0.023, y:3.8, z:3.199, duration: 1,ease: 'ease'});
    //   gsap.to(camera.current.rotation,{x:-0.863,y: 0, z:0,duration: 1,ease: 'ease'})
    //   gsap.to(camera.current, { fov: 80, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });
    gsap.to(camera.current, { fov: 30, duration: 1, ease: 'ease', onUpdate: () => camera.current.updateProjectionMatrix() });
    gsap.to(group.current.rotation, { y: 0, duration: 1, ease: 'ease' });
  
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
    marginTop: "75vh",
    gap:'10px',
    scale:'.64',
   
  
  };
  const swapclass = size.width >= 1024 ? barstyle : barstylemobile;

  return (
    <>
    <Html position="fixed" as='div' className='html'>
     {}

<div style={swapclass}>
<button style={buttonStyle}  onClick={guest} onDoubleClick={play}>EXPLORE</button>
<button style={buttonStyle} onClick={cto}>BACK</button>


</div>
</Html>
    <group {...props} dispose={null} >
      <PerspectiveCamera
        makeDefault={true}
        far={100}
        ref={camera}
        near={0.1}
        fov={35.698}
        position={[0.023, 3.8, 3.199]}
        rotation={[-0.863, 0, 0]}
      />
      <group ref={group}>
      <mesh
      
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.DoorAO}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_3.geometry}
        material={materials['Material.008']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_4.geometry}
        material={materials['Material.001']}
      />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('./Finel.glb')