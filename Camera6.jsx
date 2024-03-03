/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ../camera6.gltf -T -i -s --precision 4 
Files: ../camera6.gltf [149.62KB] > C:\Users\xotil\examplethreed\threed\camera6-transformed.glb [195.87KB] (-31%)
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/camera6-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <pointLight intensity={21.9} decay={2} color="#ffeebc" position={[-0.0522, 0.0883, 1.5602]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[-2.7926, 0.3948, -0.412]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={20} decay={2} position={[-2.6758, 0.4416, 0.9514]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={40} decay={2} position={[0.7178, 0.4416, -0.7183]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} position={[-2.5024, 1.4108, -0.5715]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} color="#fffff7" position={[-2.9207, 1.4108, 1.0627]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} color="#ffecf3" position={[-1.0228, 1.4108, 1.0005]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={30} decay={2} color="#faf3ff" position={[0.445, 1.4108, -0.6201]} rotation={[-Math.PI / 2, 0, 0]} />
      <directionalLight intensity={0.71} decay={2} position={[0.7829, -0.4238, 2.3365]} rotation={[Math.PI / 2, 0, 0]} />
      <directionalLight intensity={0.4} decay={2} position={[0.782, 1.8903, 3.3368]} rotation={[-Math.PI / 2, 0, 0]} />
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={77.6187} position={[8.0974, 0.493, -3.9147]} rotation={[0.0862, 1.2593, -0.0778]} scale={0.4072} />
      <directionalLight intensity={14} decay={2} color="#ffeeea" position={[25.2133, 5.6615, 0.9086]} rotation={[-1.2558, 1.074, 1.5062]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube020.geometry} material={materials.PaletteMaterial001} position={[-0.0836, 1.6492, 0.1628]} scale={[1, 1, 1.0893]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials.PaletteMaterial002} position={[-1.8538, 0.5999, 1.7825]} scale={0.0836} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} position={[1.0065, 0.6259, -0.3544]} scale={0.0449} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.PaletteMaterial003} position={[1.5532, 0.1459, 0.8094]} scale={[0.0116, 0.4496, 0.8506]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane001.geometry} material={materials.PaletteMaterial004} position={[0.2886, 1.1525, -1.3327]} rotation={[1.5632, 0, 0]} scale={[0.2233, 0.1909, 0.1909]} />
    </group>
  )
}

useGLTF.preload('/camera6-transformed.glb')
