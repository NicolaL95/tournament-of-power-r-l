import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Text } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';
import './ThreeDGallery.css';

const GOLDENRATIO = 2.5;

export default function ThreeDGallery ({images}) {
  
  function Frames({q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
    const ref = useRef();
    const clicked = useRef();
    const [, params] = useRoute('/gallery/:id');
    const [, setLocation] = useLocation();
    
    useEffect(() => {
      clicked.current = ref.current.getObjectByName(params?.id);

      if (clicked.current) {
        clicked.current.parent.updateWorldMatrix(true, true);
        clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 3));
        clicked.current.parent.getWorldQuaternion(q);
      } 
      else {
        p.set(0, 0, 5.5);
        q.identity();
      }
    })

    useFrame((state, dt) => {
      easing.damp3(state.camera.position, p, 0.4, dt);
      easing.dampQ(state.camera.quaternion, q, 0.4, dt);
    })

    return (
      <group
        ref={ref}
        onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/gallery' : '/gallery/' + e.object.name))}
        onPointerMissed={() => setLocation('/gallery')}>
        {images.map((props) => <Frame key={props.id} {...props} /> )}
      </group>
    )
  }

  function Frame({ src, name, description, position, rotation }) {
    const image = useRef();
    const frame = useRef();
    const [hovered, hover] = useState(false);
    const [, params] = useRoute('/gallery/:id');
    const isActive = params?.id === name;
    let rotate = rotation;
    
    useFrame((state, dt) => {
      easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
      easing.dampC(frame.current.material.color, hovered ? 'orange' : '#363636', 0.1, dt)
    })

    if(rotation[1]!== 0) rotate = [rotation[0], Math.PI / rotation[1], rotation[2]];

    return (
      <group key={name} position={position} rotation={rotate}>
        <mesh
          name={name}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          scale={[1.75, GOLDENRATIO, 0.05]}
          position={[0, GOLDENRATIO / 2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#00b89c" />
          <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
          <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={src} />
        </mesh>
        <Text color="black" maxWidth={0.1} anchorX="left" anchorY="top" position={[-0.4, 0, 0]} fontSize={0.3}>
          {description}
        </Text>
      </group>
    );
  }

  return(
    <div className="gallery container">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 0, 0] }}>
        <ambientLight />
        <group position={[0, -1.5, -0.5]}>
          <Frames/>
        </group>
      </Canvas>
    </div>
  );
}