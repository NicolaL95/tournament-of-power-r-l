import * as THREE from 'three';
import { useLayoutEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, Billboard, Text } from '@react-three/drei';
import { easing, geometry } from 'maath';
import './CharactersWheel.css';

extend(geometry)

export default function CharactersWheel({characters}) {
  const charactersData = Object.values(characters);
  const [selectedCharacter, setSelectedCharacter] = useState({name: "test", src: "test.png"});

  function Scene({ children, ...props }) {
      const ref = useRef()
      const scroll = useScroll()
      const [hovered, hover] = useState(null)

      useFrame((state, delta) => {
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
        state.events.update() // Raycasts every frame rather than on pointer-move
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta)
        state.camera.lookAt(0, 0, 0)
      })

      return (
        <group ref={ref} {...props}>
          <Cards amount={charactersData.length} onPointerOver={hover} onPointerOut={hover} />
          <ActiveCard hovered={hovered} />
        </group>
      )
    }
  
  function Cards({ amount, radius = 6.25, onPointerOver, onPointerOut, ...props }) {
    const [hovered, hover] = useState(null)
    const len = Math.PI * 2
    
    return (
      <group {...props}>
        {Array.from({ length: amount }, (_, i) => {
          const angle = (i / amount) * len;
          return (
            <Card
              key={angle}
              onPointerOver={(e) => (e.stopPropagation(), hover(i), onPointerOver(i), setSelectedCharacter(charactersData[i]))}
              onPointerOut={() => (hover(null), onPointerOut(null))}
              position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
              rotation={[0, Math.PI / 2 + angle, 0]}
              active={hovered !== null}
              hovered={hovered === i}
              url={`/${charactersData[i].src}`}
            />
          )
        })}
      </group>
    )
  }
  
  function Card({ url, active, hovered, ...props }) {
    const ref = useRef()
    
    useFrame((state, delta) => {
      easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
      easing.damp3(ref.current.scale, [2 , 2 , 2], 0.15, delta)
    })
    
    return (
      <group {...props}>
        <Image ref={ref} url={url} scale={[1, 1, 1]} side={THREE.DoubleSide} onClick={() => console.log("CIOA")}>
          <roundedPlaneGeometry args={[1, 1, 0.2]} />
        </Image>
      </group>
    )
  }
  
  function ActiveCard({ hovered, ...props }) {
    const ref = useRef()
   
    useLayoutEffect(() => void (ref.current.material.zoom = 0.8), [hovered])
    
    useFrame((state, delta) => {
      easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
      easing.damp(ref.current.material, 'opacity', hovered !== null, 0.3, delta)
    })
    
    return (
      <Billboard {...props}>
        <Text fontSize={0.5} position={[3, 4, 0]} anchorX="left" color="black">
          {hovered !== null && selectedCharacter.name}
        </Text>
        <Image ref={ref} transparent position={[0, 3, 0]} url={"/" + selectedCharacter.src}>
          <roundedPlaneGeometry parameters={{ width: 5, height: 5 }} args={[5, 5, 0.2]} />
        </Image>
      </Billboard>
    )
  }

  return(
    <div className="characters-wheel container mt-6">
      <Canvas dpr={[1, 1.5]}>
        <color attach="background" args={['white']} />
        <group position={[0, -0.5, 0]}>
          <ScrollControls infinite >
              <Scene position={[0, 1.5, 0]} />
          </ScrollControls>
        </group>
      </Canvas>
    </div>
  );
}