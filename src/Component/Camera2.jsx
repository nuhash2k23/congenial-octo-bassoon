/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ../camera2.gltf -T -i -s --precision 4 
Files: ../camera2.gltf [149.99KB] > C:\Users\xotil\examplethreed\threed\camera2-transformed.glb [194.91KB] (-11.2%)
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/camera2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <pointLight intensity={10.9} decay={2} color="orange" position={[-0.0522, 0.0883, 1.5602]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={10} decay={2} position={[-2.7926, 0.3948, -0.412]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={0} decay={2} position={[-2.6758, 0.4416, 0.9514]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={50} color="orange" decay={2} position={[0.7178, 0.4416, -0.7183]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={11.2} decay={2} position={[-2.5024, 1.4108, -0.5715]} rotation={[-Math.PI / 2, 0, 0]} />
 
      <spotLight intensity={100.71} color={"white"} decay={2} position={[1.9845, 3.9108, -0.9201]} rotation={[0,0,0]} />
      {/* <directionalLight intensity={0.4} decay={2} position={[0.782, 1.8903, 3.3368]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <PerspectiveCamera makeDefault={true} far={100} near={0.1} fov={64.7698} position={[-0.5194, 0.4644, 1.3205]} rotation={[-0.8091, -0.815, -0.5226]} scale={0.4072} />
      <hemisphereLight intensity={1.81} decay={2} color="beige" position={[25.2133, 5.6615, 0.9086]} rotation={[-1.2558, 1.074, 1.5062]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube020.geometry} material={materials.PaletteMaterial001} position={[-0.0836, 1.483, 0.1628]} scale={[1, 1, 1.0893]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials.PaletteMaterial002} position={[-1.8538, 0.5999, 1.7825]} scale={0.0836} >

      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.PaletteMaterial003} position={[1.5532, 0.1459, 0.8094]} scale={[0.0116, 0.4496, 0.8506]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane001.geometry} material={materials.PaletteMaterial004} position={[0.2886, 1.1525, -1.3327]} rotation={[1.5632, 0, 0]} scale={[0.2233, 0.1909, 0.1909]} />
    </group>
  )
}

useGLTF.preload('/camera2-transformed.glb')