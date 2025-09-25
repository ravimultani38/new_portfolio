"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei"; // Changed from Dodecahedron
import { useRef } from "react";
import * as THREE from "three";

function Crystal() {
  const ref = useRef<THREE.Mesh>(null!);

  // This hook animates the crystal on every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 4;
      ref.current.rotation.y += delta / 4;
    }
  });

  // Replaced Dodecahedron with Torus and updated props
  return (
    <Torus ref={ref} args={[1.5, 0.4, 16, 100]} scale={1.5}>
      <meshPhysicalMaterial 
        roughness={0.1}
        metalness={0.1}
        thickness={0.5}
        ior={2.3}
        transmission={1.0}
        opacity={0.5}
      />
    </Torus>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Crystal />
    </Canvas>
  );
}