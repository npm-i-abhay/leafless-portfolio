
import { useState, useEffect, useRef } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import {useSpring, a } from "@react-spring/three"
// import { Box } from '@react-three/drei';
import React from 'react';


const MyBox = ({position, args,color='pink', speed})=>
{
    const mesh = useRef(null)
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += .01))

    const [expand, setExpand] = useState(false)
    const props = useSpring({
        scale: expand? [1.4,1.4,1.4]:[1,1,1]
    })
    return(
        <a.mesh
        onClick={()=> setExpand(!expand)}
        scale={props.scale}
        castShadow 
        position={position}ref={mesh}>
            <boxBufferGeometry attach='geometry' args={args}/>
            <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={.6}/>
            {/* <glitchPass attachArray="passes" renderToScreen /> */}
        </a.mesh>
    )
}

export const Element = () => {
    
    
  return <div style={{height:'100vh', width:'100vw', position:'absolute', zIndex:-1}} >
    <Canvas
        shadowMap
        colorManagement
        camera={{position:[-5,2,10], fov:70}}
        >
        <ambientLight intensity ={.5}/>
        <directionalLight 
            castShadow
            position={[0,10,0]} 
            intensity={1.5} 
            shadow-mapSize-width ={1024} 
            shadow-mapSize-height ={1024} 
            shadow-camera-far={50}
            shadow-camera-top={-10}
            shadow-camera-left={10}
            shadow-camera-right={10}
            shadow-camera-bottom={-10}
            />
        <pointLight position={[-10,0,-20]} intensity={.5} />
        <pointLight position={[0,-10,0]} intensity={.5} />
        <MyBox
            // onClick={()=>{console.log('hiiiii')}}
            position={-5,10,3} args={[5,2,1]}
            speed={1}/>
        <MyBox position ={-1,4,1}  speed={3}/>
        <MyBox position = {-10,15,5} speed={6} />
        <OrbitControls enableZoom={false} />

        <group>
            <mesh 
            receiveShadow 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,-3,0]} >
                <planeBufferGeometry attach='geometry' args ={[100,100]}/>
                <shadowMaterial attach='material' opacity={1} />
            </mesh>
        </group>

    </Canvas>
  </div>;
};
