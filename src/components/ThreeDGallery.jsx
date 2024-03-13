import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useCursor, Image } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';
import './ThreeDGallery.css';

const GOLDENRATIO = 1.5;

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
        clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
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
        {images.map((image) => <Frame key={image.id} {...image} /> )}
      </group>
    )
  }

  function Frame({ src, name, position, rotation, ...props }) {
    const image = useRef();
    const frame = useRef();

    const [hovered, hover] = useState(false);
    const [rnd] = useState(() => Math.random());

    const [, params] = useRoute('/gallery/:id');

    const isActive = params?.id === name;
  
    useCursor(hovered);
    
    useFrame((state, dt) => {
      image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
      easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
      easing.dampC(frame.current.material.color, hovered ? 'orange' : '#363636', 0.1, dt)
    })

    let rotate = rotation;
    if(rotation[1]!== 0)
      rotate = [rotation[0], Math.PI / rotation[1], rotation[2]];

    return (
      <group key={name} position={position} rotation={rotate}>
        <mesh
          name={name}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          scale={[1, GOLDENRATIO, 0.05]}
          position={[0, GOLDENRATIO / 2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#00b89c" />
          <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
          <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={src} />
        </mesh>
      </group>
    )
  }

  return(
    <div className="gallery container mt-6">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 0, 0] }}>
        <ambientLight />
        <group position={[0, -0.5, 0]}>
          <Frames/>
        </group>
      </Canvas>
    </div>
  );
}